const fs = require('fs');
const vm = require('vm');

const BLOG_PATH = 'src/content/blogPosts.js';
const src = fs.readFileSync(BLOG_PATH, 'utf8');
const m = src.match(/export const blogPosts\s*=\s*(\[[\s\S]*?\n\]);/);
if (!m) throw new Error('blogPosts array not found');
const posts = vm.runInNewContext(m[1]);

const post12Ru = {
  title: 'Как тайфуны в Китае влияют на доставку товаров: кейс после Saola',
  content: {
    intro:
      'В начале сентября 2023 года Южный Китай столкнулся с одним из самых мощных тайфунов за последние годы. Стихия затронула ключевые логистические регионы — Шэньчжэнь, Гуанчжоу и Гонконг. Для бизнеса, который работает с Китаем, такие события — это не просто новости. Это прямое влияние на сроки, стоимость и стабильность поставок.',
    section1Title: 'Что происходит с логистикой во время тайфунов',
    section1Intro: 'При приближении тайфуна:',
    section1Items:
      'закрываются морские порты.&останавливается работа складов и терминалов.&отменяются или переносятся авиарейсы.',
    section1After:
      'В случае с тайфуном Saola большинство портов в Южном Китае были временно закрыты, что привело к накоплению грузов.',
    section2Title: 'Последствия для доставки',
    section2Intro: 'Даже после стабилизации погоды проблемы не исчезают сразу:',
    section2Items:
      'образуются очереди на отгрузку.&порты работают с перегрузкой.&сроки доставки увеличиваются на 5-10 дней.&возможно повышение тарифов.',
    section3Title: 'Как это влияет на бизнес',
    section3Intro: 'Если поставка планировалась впритык:',
    section3Items:
      'возникают задержки продаж.&срываются сезонные поставки.&замораживаются оборотные средства.',
    section4Title: 'Что стоит учитывать',
    section4Intro:
      'Тайфуны — регулярное явление для Китая, особенно в период с августа по октябрь. Чтобы минимизировать риски:',
    section4Items:
      'планируйте поставки с запасом по времени.&не работайте в последний момент.&используйте альтернативные способы доставки.',
    conclusions:
      'Погодные факторы — один из ключевых рисков в международной логистике. И компании, которые учитывают эти риски заранее, всегда имеют конкурентное преимущество.',
    advice:
      'Надежный логистический партнер позволяет не просто доставлять товар, а контролировать ситуацию даже в нестабильных условиях.',
  },
};

function fillMissingRuByStructure(post) {
  const uk = post?.translations?.uk?.content;
  const ru = post?.translations?.ru?.content;
  if (!uk || !ru) return;

  const newRu = {};
  for (const key of Object.keys(uk)) {
    if (typeof ru[key] === 'string' && ru[key].trim()) {
      newRu[key] = ru[key];
      continue;
    }

    if (/^para\d+$/.test(key)) {
      const idx = Number(key.slice(4));
      let fallback = '';
      for (let i = idx - 1; i >= 1; i--) {
        const prev = newRu[`para${i}`] || ru[`para${i}`];
        if (typeof prev === 'string' && prev.trim()) {
          fallback = prev;
          break;
        }
      }
      if (!fallback) {
        fallback =
          (typeof ru.para1 === 'string' && ru.para1) ||
          (typeof ru.intro === 'string' && ru.intro) ||
          (typeof ru.conclusions === 'string' && ru.conclusions) ||
          '';
      }
      newRu[key] = fallback;
      continue;
    }

    if (key === 'intro') {
      newRu[key] =
        (typeof ru.para1 === 'string' && ru.para1) ||
        (typeof ru.intro === 'string' && ru.intro) ||
        '';
      continue;
    }

    if (key === 'conclusions') {
      newRu[key] =
        (typeof ru.conclusions === 'string' && ru.conclusions) ||
        (typeof ru.para1 === 'string' && ru.para1) ||
        (typeof ru.intro === 'string' && ru.intro) ||
        '';
      continue;
    }

    newRu[key] = typeof ru[key] === 'string' ? ru[key] : '';
  }

  if (newRu.para1) newRu.intro = newRu.para1;
  post.translations.ru.content = newRu;
}

for (const p of posts) {
  if (p.id === 12 && p.translations?.ru) {
    p.translations.ru.title = post12Ru.title;
    p.translations.ru.content = post12Ru.content;
  }
  fillMissingRuByStructure(p);
}

const newArray = JSON.stringify(posts, null, 2);
const next = src.replace(/export const blogPosts\s*=\s*\[[\s\S]*?\n\];/, `export const blogPosts = ${newArray};`);
fs.writeFileSync(BLOG_PATH, next);

console.log('DONE');
