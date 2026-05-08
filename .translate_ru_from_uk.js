global.fetch = require('node-fetch');
const fs = require('fs');
const { translate } = require('google-translate-api-x');

const FILE = 'src/content/blogPosts.js';
const src = fs.readFileSync(FILE, 'utf8');

function findMatchingBrace(text, openBraceIndex) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openBraceIndex; i < text.length; i += 1) {
    const ch = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function parseContentPairs(block) {
  const pairs = [];
  const re = /"([^"\\]+)"\s*:\s*"((?:\\.|[^"\\])*)"\s*(?:,|$)/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    pairs.push({ key: m[1], value: JSON.parse('"' + m[2] + '"') });
  }
  return pairs;
}

function esc(str) {
  return JSON.stringify(str).slice(1, -1);
}

async function translateBatch(items) {
  const MAX_RETRIES = 4;
  for (let i = 0; i < MAX_RETRIES; i += 1) {
    try {
      const res = await translate(items, { from: 'uk', to: 'ru' });
      if (Array.isArray(res)) return res.map((x) => x.text);
      return [res.text];
    } catch (e) {
      if (i === MAX_RETRIES - 1) throw e;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  return items;
}

(async () => {
  let out = '';
  let cursor = 0;
  let seek = 0;
  let touched = 0;

  while (true) {
    const ukStart = src.indexOf('"uk": {', seek);
    if (ukStart === -1) break;

    const ukOpen = src.indexOf('{', ukStart);
    const ukClose = findMatchingBrace(src, ukOpen);
    if (ukClose === -1) break;

    const ruStart = src.indexOf('"ru": {', ukClose);
    if (ruStart === -1) break;

    const ruOpen = src.indexOf('{', ruStart);
    const ruClose = findMatchingBrace(src, ruOpen);
    if (ruClose === -1) break;

    const ukBlock = src.slice(ukStart, ukClose + 1);
    const titleMatch = ukBlock.match(/"title"\s*:\s*"((?:\\.|[^"\\])*)"/);
    const contentLabel = ukBlock.indexOf('"content": {');

    if (!titleMatch || contentLabel === -1) {
      seek = ruClose + 1;
      continue;
    }

    const contentOpen = ukBlock.indexOf('{', contentLabel);
    const contentClose = findMatchingBrace(ukBlock, contentOpen);
    if (contentClose === -1) {
      seek = ruClose + 1;
      continue;
    }

    const ukTitle = JSON.parse('"' + titleMatch[1] + '"');
    const ukPairs = parseContentPairs(ukBlock.slice(contentOpen + 1, contentClose));

    if (!ukPairs.length) {
      seek = ruClose + 1;
      continue;
    }

    const texts = [ukTitle, ...ukPairs.map((p) => p.value)];
    const translated = await translateBatch(texts);

    const ruTitle = translated[0] || ukTitle;
    const ruPairs = ukPairs.map((p, idx) => ({
      key: p.key,
      value: translated[idx + 1] || p.value,
    }));

    const ruLines = [];
    ruLines.push('"ru": {');
    ruLines.push('        "title": "' + esc(ruTitle) + '",');
    ruLines.push('        "content": {');
    for (let i = 0; i < ruPairs.length; i += 1) {
      const comma = i === ruPairs.length - 1 ? '' : ',';
      ruLines.push('          "' + ruPairs[i].key + '": "' + esc(ruPairs[i].value) + '"' + comma);
    }
    ruLines.push('        }');
    ruLines.push('      }');

    out += src.slice(cursor, ruStart);
    out += ruLines.join('\n');

    cursor = ruClose + 1;
    seek = ruClose + 1;
    touched += 1;

    if (touched % 5 === 0) {
      console.log('Translated blocks:', touched);
    }
  }

  if (!touched) {
    console.error('No RU blocks updated');
    process.exit(1);
  }

  out += src.slice(cursor);
  fs.writeFileSync(FILE + '.bak', src);
  fs.writeFileSync(FILE, out, 'utf8');
  console.log('DONE. Updated blocks:', touched);
})();
