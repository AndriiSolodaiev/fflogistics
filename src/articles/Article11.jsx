import { useTranslation } from "react-i18next";

export const Article11 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article11.content.";
  return (
    <section className="article-content__section">
      <div className="article11__hero-bg ">
        <h2 className="article-contet__title container">
          {t("blogpages.article11.title")}
        </h2>
      </div>
      <div className="article__list-wrapper">
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
        </ul>
      </div>
    </section>
  );
};
