import { useTranslation } from "react-i18next";

export const Article2 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article2.content.";
  return (
    <section className="article-content__section">
      <div className="container article2__hero-bg">
        <h2 className="article-contet__title">
          {t("blogpages.article2.title")}
        </h2>
      </div>
      <div className="article__list-wrapper">
        <ul className="container content__list">
          <li>{t(`${contentPath}intro`)}</li>
          <li>
            <ul className="content__list">
              {t(`${contentPath}general1`)
                .split("&")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </li>
          <li>
            <ul className="list-sea">
              {t(`${contentPath}dialog`)
                .split("&")
                .map((item, index) => (
                  <li key={index} className="article-contet__dialog">
                    {item}
                  </li>
                ))}
            </ul>
          </li>
          <li>
            <ul className="content__list">
              {t(`${contentPath}general2`)
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
            <ol className="list-sea">
              {t(`${contentPath}listItems`)
                .split("&")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ol>
          </li>

          <li>{t(`${contentPath}advice`)}</li>
        </ul>
      </div>
    </section>
  );
};
