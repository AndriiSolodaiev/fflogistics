const fs = require('fs');
const vm = require('vm');

const path = 'src/content/blogPosts.js';
const src = fs.readFileSync(path, 'utf8');
const m = src.match(/export const blogPosts\s*=\s*(\[[\s\S]*?\n\]);/);
if (!m) throw new Error('blogPosts array not found');
const posts = vm.runInNewContext(m[1]);

const issues = [];
const ukLetters = /[іїєґІЇЄҐ]/;
const ukWords = /\b(чому|бізнес|підприємці|поставки|логістика|ринок|зміни|працювати|значно|швидше|більше|менше|після|року|роки|коли|якщо|сьогодні)\b/i;

for (const p of posts) {
  const uk = p?.translations?.uk?.content || {};
  const ru = p?.translations?.ru?.content || {};
  const ukKeys = Object.keys(uk).sort();
  const ruKeys = Object.keys(ru).sort();
  if (JSON.stringify(ukKeys) !== JSON.stringify(ruKeys)) {
    issues.push({id:p.id, type:'keys-mismatch', ukKeys, ruKeys});
  }

  const titleUk = p?.translations?.uk?.title || '';
  const titleRu = p?.translations?.ru?.title || '';
  if (!titleRu.trim()) {
    issues.push({id:p.id, type:'missing-ru-title'});
  }
  if (ukLetters.test(titleRu) || ukWords.test(titleRu)) {
    issues.push({id:p.id, type:'ru-title-has-ukrainian', value:titleRu});
  }

  for (const [k,v] of Object.entries(ru)) {
    if (typeof v !== 'string') continue;
    if (!v.trim()) issues.push({id:p.id, type:'empty-ru-field', field:k});
    if (ukLetters.test(v) || ukWords.test(v)) {
      issues.push({id:p.id, type:'ru-field-has-ukrainian', field:k, sample:v.slice(0,140)});
    }
    if (uk[k] && typeof uk[k] === 'string') {
      const ruLen = v.trim().length;
      const ukLen = uk[k].trim().length;
      if (ukLen > 0) {
        const ratio = ruLen / ukLen;
        if (ratio < 0.45 || ratio > 1.9) {
          issues.push({id:p.id, type:'length-outlier', field:k, ratio:ratio.toFixed(2)});
        }
      }
    }
  }
}

console.log('TOTAL_POSTS', posts.length);
console.log('TOTAL_ISSUES', issues.length);
for (const i of issues) console.log(JSON.stringify(i));
