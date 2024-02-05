import { imgSrcMaker } from "helpers/imgSrcMaker";
import { useTranslation } from "react-i18next";

export const Article9 = () => {
  const { t } = useTranslation();
  const contentPath = "blogpages.article9.content.";
  return (
    <section className="article-content__section">
      <div className="article9__hero-bg">
        <h2 className="article-contet__title">
          {t("blogpages.article9.title")}
        </h2>
      </div>
      <div className="article__list-wrapper">
        <ul className="container content__list">
          <li>{t(`${contentPath}intro`)}</li>
          <li>
            {" "}
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
          <li className="article-content__img-wrapper">
            <img
              src={imgSrcMaker(t(`${contentPath}content-photo-1`))}
              alt="графік"
              className="article-content__img"
            />
          </li>
          <li>
            <ul className="content__list">
              {t(`${contentPath}general1`)
                .split("&")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </li>
          <li className="article-content__list-title">
            {t(`${contentPath}subtitle`)}
          </li>
          <li className="article-content__img-wrapper">
            <img
              src={imgSrcMaker(t(`${contentPath}content-photo-2`))}
              alt="графік"
              className="article-content__img"
            />
          </li>
          <li>{t(`${contentPath}conclusions`)}</li>
        </ul>
      </div>
    </section>
  );
};
