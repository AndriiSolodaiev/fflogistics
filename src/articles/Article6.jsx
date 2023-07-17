import { useTranslation } from "react-i18next";

export const Article6 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article6.content.";
  return (
    <section className="article-content__section">
      <div className="article6__hero-bg ">
        <h2 className="article-contet__title container">
          {t("blogpages.article6.title")}
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
