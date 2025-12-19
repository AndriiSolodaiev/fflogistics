import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

export const SEO = () => {
  const { pathname } = useLocation();
  const origin = window.location.origin;

   const seoData = {
  '/uk/': {
    title: 'Доставка вантажів з Китаю в Україну — FFLogistics | Морські, Авіа, ЖД перевезення',
    description:
      'Міжнародна доставка вантажів з Китаю в Україну: морські, авіа та контейнерні перевезення. Повний логістичний супровід і швидка доставка.',
  },
  '/uk/sea-transportation': {
    title: 'Морські перевезення з Китаю в Україну — Контейнерна доставка | FFLogistics',
    description:
      'Надійна морська доставка вантажів з Китаю в Україну. Контейнери, страхування та супровід.',
  },
  '/uk/air-transportation': {
    title: 'Авіадоставка з Китаю в Україну — Швидке перевезення вантажів | FFLogistics',
    description:
      'Швидка авіадоставка вантажів з Китаю в Україну. Повний супровід та контроль перевезення.',
  },
  '/uk/rail-transportation': {
    title: 'Залізничні перевезення з Китаю — ЖД доставка вантажів в Україну | FFLogistics',
    description:
      'Економна доставка вантажів залізницею. Контейнери, страховка, логістика.',
  },
  '/uk/transportation-requirements': {
  title: 'Правила транспортування вантажів — Вимоги до упаковки та прийому | FFLogistics',
  description:
    'Умови прийому та транспортування вантажів: вимоги до упаковки, опис товару, страхування, відповідальність перевізника. Правила доставки від FFLogistics.',
},
  '/uk/delivery-from-Europe': {
    title: 'Доставка вантажів з Європи в Україну — Автомобільні перевезення | FFLogistics',
    description:
      'Швидка та надійна доставка вантажів з Європи: автомобільні перевезення. Повний логістичний супровід.',
  },
  '/uk/delivery-from-SthKorea': {
    title: 'Доставка вантажів з Південної Кореї в Україну — Морські та Авіа | FFLogistics',
    description:
      'Міжнародна доставка вантажів з Південної Кореї в Україну: морські та авіа перевезення. Швидко та надійно.',
  },
  '/uk/reviews': {
    title: 'Відгуки про FFLogistics — Доставка вантажів з Китаю та Європи в Україну',
    description:
      'Реальні відгуки клієнтів FFLogistics про доставку вантажів з Китаю, Європи та Південної Кореї. Якість та надійність підтверджена користувачами.',
  },
  '/ru/': {
    title: 'Доставка грузов из Китая в Украину — FFLogistics | Морские, Авиа, ЖД перевозки',
    description:
      'Международная доставка грузов из Китая в Украину: морские, авиа и контейнерные перевозки. Полное логистическое сопровождение и быстрая доставка.',
  },
  '/ru/sea-transportation': {
    title: 'Морские перевозки из Китая в Украину — Контейнерная доставка | FFLogistics',
    description:
      'Надежная морская доставка грузов из Китая в Украину. Контейнеры, страхование и сопровождение.',
  },
  '/ru/air-transportation': {
    title: 'Авиадоставка из Китая в Украину — Быстрая перевозка грузов | FFLogistics',
    description:
      'Быстрая авиадоставка грузов из Китая в Украину. Полное сопровождение и контроль перевозки.',
  },
  '/ru/rail-transportation': {
    title: 'Железнодорожные перевозки из Китая — ЖД доставка грузов в Украину | FFLogistics',
    description:
      'Экономная доставка грузов железнодорожным транспортом из Китая в Украину. Контейнеры, страховка, логистика.',
  },
  '/ru/transportation-requirements': {
  title: 'Правила транспортировки грузов — Требования к упаковке и приёму | FFLogistics',
  description:
    'Условия приёма и транспортировки грузов: требования к упаковке, описание товара, страхование, ответственность перевозчика. Правила доставки от FFLogistics.',
},
  '/ru/delivery-from-Europe': {
    title: 'Доставка грузов из Европы в Украину — Автомобильные перевозки | FFLogistics',
    description:
      'Быстрая и надежная доставка грузов из Европы: автомобильные перевозки. Полное логистическое сопровождение.',
  },
  '/ru/delivery-from-SthKorea': {
    title: 'Доставка грузов из Южной Кореи в Украину — Морские и Авиа | FFLogistics',
    description:
      'Международная доставка грузов из Южной Кореи в Украину: морские и авиа  перевозки. Быстро и надежно.',
  },
  '/ru/reviews': {
    title: 'Отзывы о FFLogistics — Доставка грузов из Китая и Европы в Украину',
    description:
      'Реальные отзывы клиентов FFLogistics о доставке грузов из Китая, Европы и Южной Кореи. Качество и надежность подтверждены пользователями.',
  },
};

  // fallback для не визначених сторінок
  const defaultSEO = {
    title: 'FFLogistics – Міжнародна доставка вантажів з Китаю',
    description:
      'FFLogistics забезпечує швидку та надійну доставку вантажів з Китаю в Україну: море, авіа, залізниця. Повний логістичний супровід.',
  };

  const { title, description } = seoData[pathname] || defaultSEO;
  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={`${origin}${pathname}`} />

       {/* Hreflang для мов */}
      <link rel="alternate" hreflang="uk" href="https://fflogistics.com.ua/uk" />
      <link rel="alternate" hreflang="ru" href="https://fflogistics.com.ua/ru" />
      <link rel="alternate" hreflang="x-default" href="https://fflogistics.com.ua/uk" />
    </Helmet>
  );
};

