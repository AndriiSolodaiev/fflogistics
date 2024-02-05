import { useTranslation } from "react-i18next";

export const Article7 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article7.content.";
  return (
    <section className="article-content__section">
      <div className="article7__hero-bg ">
        <h2 className="article-contet__title container">
          {t("blogpages.article7.title")}
        </h2>
      </div>
      <div className="article__list-wrapper">
        <ul className="container content__list">
          <li>
            <ol className="list-sea">
              {t(`${contentPath}listItems`)
                .split("&")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ol>
          </li>
        </ul>
      </div>
    </section>
  );
};
