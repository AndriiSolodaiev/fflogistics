import { Link } from "react-router-dom";
import { blogArticles } from "../dictionary";

import { useTranslation } from "react-i18next";
import { svgHrefMaker } from "../helpers";
import { useToggle } from "../hooks/useToggle";
export const BlogSection = () => {
  const { t } = useTranslation();
  const { toggle, isOpen } = useToggle();
  return (
    <section className="blog-section" id="blog">
      <div className="container blog-container">
        <h2 className="blog__title">{t("blog.title")}</h2>
        <p className="blog__subtitle">{t("blog.subtitle")}</p>
        <ul className={`articles__list ${isOpen ? "article__list--all" : ""}`}>
          {blogArticles.map(({ id, date }) => (
            <li key={id} className="article__wrapper">
              <Link>
                <article className="article__container">
                  <div className="article__text-section">
                    <h3 className="article__title">
                      {t(`blog.article${id}.title`)}
                    </h3>
                    <p className="article__content">
                      {t(`blog.article${id}.content`)}
                    </p>
                    <div className="article__date-wrapper">
                      <svg className="article__date-icon">
                        <use href={svgHrefMaker("icon-calender")}> </use>
                      </svg>
                      <time className="article__date">{date}</time>
                    </div>
                  </div>
                  <img src="" alt="asdasd" className="article__img" />
                </article>
              </Link>
            </li>
          ))}
        </ul>
        <button className="blog__loadmore-btn " type="button" onClick={toggle}>
          {isOpen ? t("blog.loadmoreBtn-to-close") : t("blog.loadmoreBtn")}
        </button>
      </div>
    </section>
  );
};
