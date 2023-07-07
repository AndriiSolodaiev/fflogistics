import { Link } from "react-router-dom";
import { blogImages } from "dictionary";

import { useTranslation } from "react-i18next";
import { BlogCard } from "atoms";

export const BlogSection = () => {
  const { t } = useTranslation();
  const { id, img, date } = blogImages[blogImages.length - 1];
  return (
    <section className="blog-section">
      <div className="container blog-container">
        <h2 className="blog__title">{t("blog.title")}</h2>
        <p className="blog__subtitle">{t("blog.subtitle")}</p>
        <ul className="blog-page__list">
          <BlogCard key={id} id={id} img={img} date={date} />
        </ul>
        <Link to="/blog" className="blog__loadmore-btn">
          {t("blog.loadmoreBtn")}
        </Link>
      </div>
    </section>
  );
};
