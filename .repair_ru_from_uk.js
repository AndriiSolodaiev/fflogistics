const fs = require('fs');
const vm = require('vm');

const BLOG_PATH = 'src/content/blogPosts.js';
const src = fs.readFileSync(BLOG_PATH, 'utf8');
const m = src.match(/export const blogPosts\s*=\s*(\[[\s\S]*?\n\]);/);
if (!m) throw new Error('blogPosts array not found');
const posts = vm.runInNewContext(m[1]);

const ukLetters = /[іїєґІЇЄҐ]/;

const phraseMap = [
  ['міжнародна логістика', 'международная логистика'],
  ['міжнародної логістики', 'международной логистики'],
  ['доставка з Китаю', 'доставка из Китая'],
  ['доставки з Китаю', 'доставки из Китая'],
  ['логістичні партнери', 'логистические партнеры'],
  ['логістичного партнера', 'логистического партнера'],
  ['Червоному морі', 'Красном море'],
  ['високий сезон', 'высокий сезон'],
  ['оборотні кошти', 'оборотные средства'],
  ['підприємці', 'предприниматели'],
  ['постачальників', 'поставщиков'],
  ['постачання', 'поставки'],
  ['поставки', 'поставки'],
  ['поставок', 'поставок'],
  ['терміни доставки', 'сроки доставки'],
  ['зростання тарифів', 'рост тарифов'],
  ['ризики', 'риски'],
  ['нестабільність', 'нестабильность'],
  ['гнучкість', 'гибкость'],
  ['планування', 'планирование'],
  ['прогнозування', 'прогнозирование'],
  ['аналітика', 'аналитика'],
  ['зміни', 'изменения'],
  ['швидкість', 'скорость'],
  ['бізнес', 'бизнес'],
  ['ринок', 'рынок'],
  ['компанії', 'компании'],
  ['сьогодні', 'сегодня'],
  ['чому', 'почему'],
];

const wordMap = [
  ['і', 'и'],
  ['й', 'и'],
  ['це', 'это'],
  ['що', 'что'],
  ['для', 'для'],
  ['через', 'из-за'],
  ['після', 'после'],
  ['більше', 'больше'],
  ['менше', 'меньше'],
  ['також', 'также'],
  ['навіть', 'даже'],
  ['може', 'может'],
  ['можуть', 'могут'],
  ['коли', 'когда'],
  ['якщо', 'если'],
  ['тому', 'поэтому'],
  ['бо', 'потому что'],
  ['вже', 'уже'],
  ['року', 'году'],
  ['роки', 'годы'],
  ['стала', 'стала'],
  ['став', 'стал'],
  ['стали', 'стали'],
  ['роботи', 'работы'],
  ['робота', 'работа'],
  ['працювати', 'работать'],
  ['працює', 'работает'],
  ['почали', 'начали'],
  ['почав', 'начал'],
  ['отримують', 'получают'],
  ['отримує', 'получает'],
  ['прибуток', 'прибыль'],
  ['затримки', 'задержки'],
  ['зростає', 'растет'],
  ['зросли', 'выросли'],
  ['змінився', 'изменился'],
  ['змінюються', 'меняются'],
  ['маршрути', 'маршруты'],
  ['маршрутів', 'маршрутов'],
  ['вантаж', 'груз'],
  ['вантажів', 'грузов'],
  ['відвантаження', 'отгрузка'],
  ['закупівлі', 'закупки'],
  ['закупівель', 'закупок'],
  ['товар', 'товар'],
  ['товару', 'товара'],
  ['товарів', 'товаров'],
  ['клієнти', 'клиенты'],
  ['клієнтів', 'клиентов'],
  ['перевага', 'преимущество'],
  ['переваги', 'преимущества'],
  ['завдяки', 'благодаря'],
  ['важливо', 'важно'],
  ['важливіше', 'важнее'],
  ['сильнішим', 'сильнее'],
  ['сильнішими', 'сильнее'],
  ['України', 'Украины'],
  ['український', 'украинский'],
  ['українські', 'украинские'],
  ['підхід', 'подход'],
  ['підходи', 'подходы'],
  ['рішення', 'решения'],
  ['розвитку', 'развития'],
  ['розвиток', 'развитие'],
  ['довгостроковий', 'долгосрочный'],
  ['довгостроковій', 'долгосрочной'],
  ['стабільний', 'стабильный'],
  ['стабільність', 'стабильность'],
  ['прозорість', 'прозрачность'],
  ['комунікація', 'коммуникация'],
  ['комунікацію', 'коммуникацию'],
  ['зростання', 'рост'],
  ['впливає', 'влияет'],
  ['впливають', 'влияют'],
  ['вплинула', 'повлияла'],
  ['потрібно', 'нужно'],
  ['потрібна', 'нужна'],
  ['потрібен', 'нужен'],
  ['швидко', 'быстро'],
  ['швидше', 'быстрее'],
  ['повільніше', 'медленнее'],
  ['поступово', 'постепенно'],
  ['найкраще', 'лучше всего'],
];

function preserveCase(src, replacement) {
  if (!src) return replacement;
  if (src.toUpperCase() === src) return replacement.toUpperCase();
  if (src[0] && src[0].toUpperCase() === src[0]) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function replaceWordBounded(text, from, to) {
  const re = new RegExp(`\\b${from}\\b`, 'gi');
  return text.replace(re, (m) => preserveCase(m, to));
}

function ukToRu(input) {
  let t = input;

  for (const [uk, ru] of phraseMap.sort((a, b) => b[0].length - a[0].length)) {
    const re = new RegExp(uk.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&'), 'gi');
    t = t.replace(re, (m) => preserveCase(m, ru));
  }

  for (const [uk, ru] of wordMap.sort((a, b) => b[0].length - a[0].length)) {
    t = replaceWordBounded(t, uk, ru);
  }

  // Final fallback: map remaining UA-specific letters to RU equivalents.
  t = t
    .replace(/і/g, 'и')
    .replace(/І/g, 'И')
    .replace(/ї/g, 'и')
    .replace(/Ї/g, 'И')
    .replace(/є/g, 'е')
    .replace(/Є/g, 'Е')
    .replace(/ґ/g, 'г')
    .replace(/Ґ/g, 'Г');

  return t;
}

let updated = 0;
for (const p of posts) {
  const uk = p?.translations?.uk?.content;
  const ru = p?.translations?.ru?.content;
  if (!uk || !ru) continue;

  const keys = Object.keys(uk).filter((k) => /^para\d+$/.test(k)).sort((a,b)=>+a.slice(4)-+b.slice(4));

  // Fix suspicious para duplicates and ukrainian contamination in RU.
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const prevKey = i > 0 ? keys[i-1] : null;
    const cur = ru[k];
    const prev = prevKey ? ru[prevKey] : null;
    const shouldTranslate =
      typeof uk[k] === 'string' && (
        typeof cur !== 'string' ||
        !cur.trim() ||
        ukLetters.test(cur) ||
        (typeof prev === 'string' && cur === prev)
      );

    if (shouldTranslate) {
      ru[k] = ukToRu(uk[k]);
      updated++;
    }
  }

  // Align non-para keys if they accidentally contain Ukrainian letters.
  for (const k of Object.keys(uk)) {
    if (/^para\d+$/.test(k)) continue;
    if (typeof ru[k] === 'string' && ukLetters.test(ru[k])) {
      ru[k] = ukToRu(uk[k]);
      updated++;
    }
    if ((typeof ru[k] !== 'string' || !ru[k].trim()) && typeof uk[k] === 'string') {
      ru[k] = ukToRu(uk[k]);
      updated++;
    }
  }

  if (ru.para1) ru.intro = ru.para1;
}

const newArray = JSON.stringify(posts, null, 2);
const next = src.replace(/export const blogPosts\s*=\s*\[[\s\S]*?\n\];/, `export const blogPosts = ${newArray};`);
fs.writeFileSync(BLOG_PATH, next);
console.log('UPDATED_FIELDS', updated);
