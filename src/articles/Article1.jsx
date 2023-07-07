import { useTranslation } from "react-i18next";

export const Article1 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article1.content.";
  return (
    <section className="article-content__section">
      <div className="article__hero-bg">
        <h2 className="article-contet__title">
          {t("blogpages.article1.title")}
        </h2>
      </div>
      <div className="article__list-wrapper">
        <ul className="container content__list">
          <li>{t(`${contentPath}intro`)}</li>
          <li className="article-content__list-title">
            {t(`${contentPath}listTitle`)}
          </li>
          <li>
            <ol className="list-sea">
              {t(`${contentPath}listItems`)
                .split("&")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ol>
          </li>
          <li>{t(`${contentPath}conclusions`)}</li>
          <li className="article-content__list-title">
            {t(`${contentPath}subtitle`)}
          </li>
          <li>{t(`${contentPath}advice`)}</li>
        </ul>
      </div>
    </section>
  );
};
