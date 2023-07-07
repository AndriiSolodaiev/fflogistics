import { svgHrefMaker } from "helpers";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const BlogCard = ({ id, img, date }) => {
  const { t } = useTranslation();
  return (
    <li className="blog-page__item">
      <img
        loading="lazy"
        src={img}
        alt={`article${id}`}
        className="blog-page__item-img"
      />
      <div className="article__descr-wrapper">
        <h3 className="blog-page__article-title">
          {t(`blogpages.article${id}.title`)}
        </h3>
        <div className="blog-article__date-wrapper">
          <svg className="article__date-icon">
            <use href={svgHrefMaker("icon-calender")}> </use>
          </svg>
          <time className="blog-article__date">{date}</time>
        </div>
        <p className="blog-article__intro">
          {t(`blogpages.article${id}.content.intro`)}
        </p>
        <Link to={`/blog/${id}`} className="blog-article__link">
          {t(`blogpages.readmore`)}
        </Link>
      </div>
    </li>
  );
};
