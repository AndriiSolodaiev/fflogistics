import { useTranslation } from "react-i18next";

export const Article3 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article3.content.";
  return (
    <section className="article-content__section">
      <div className="article3__hero-bg">
        <h2 className="article-contet__title">
          {t("blogpages.article3.title")}
        </h2>
      </div>
      <ul className="container content__list">
        <li>{t(`${contentPath}intro`)}</li>
        <li>
          <ul className="content__list">
            {t(`${contentPath}general`)
              .split("&")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </li>
        <li className="article-content__list-title">
          {t(`${contentPath}listTitle`)}
        </li>
        <li>
          <ul className="list-sea">
            {t(`${contentPath}listItems`)
              .split("&")
              .map((item, index) => (
                <li key={index} className="list-sea__item">
                  {item}
                </li>
              ))}
          </ul>
        </li>
        <li>{t(`${contentPath}advice`)}</li>
      </ul>
    </section>
  );
};
