import { svgHrefMaker } from "helpers";
import { useTranslation } from "react-i18next";

import { CustomLink } from "./CustomLink";

export const BlogCard = ({ id, img, imgWebp, date }) => {
  const { t } = useTranslation();
  return (
    <div className="blog-page__item">
      <picture>
        <source srcSet={imgWebp} type="image/webp" />
        <img
          loading="lazy"
          src={img}
          alt={`article${id}`}
          className="blog-page__item-img"
        />
      </picture>
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
        <CustomLink
          linkClass="blog-article__link"
          to={`/blog/${id}`}
          ariaLabel="go to article"
          text={t(`blogpages.readmore`)}
        />
        {/* <Link
          to={`/blog/${id}`}
          className="blog-article__link"
          aria-label="go to article"
        >
          {t(`blogpages.readmore`)}
        </Link> */}
      </div>
    </div>
  );
};
