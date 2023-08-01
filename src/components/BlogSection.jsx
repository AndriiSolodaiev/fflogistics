import { Link } from "react-router-dom";
import { blogImages } from "dictionary";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { BlogCard } from "atoms";

const ArrowNext = ({ style, onClick }) => {
  return (
    <button
      className="slick-next"
      style={{ ...style }}
      onClick={onClick}
    ></button>
  );
};
const ArrowPrev = ({ style, onClick }) => {
  return (
    <button
      className="slick-prev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></button>
  );
};
export const BlogSection = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="blog__title">{t("blog.title")}</h2>
        <p className="blog__subtitle">{t("blog.subtitle")}</p>

        <Slider {...settings}>
          {blogImages
            .map(({ id, img, imgWebp, date }) => (
              <BlogCard
                id={id}
                img={img}
                imgWebp={imgWebp}
                date={date}
                key={id}
              />
            ))
            .reverse()}
        </Slider>

        <div className="blog-container">
          <Link
            to="/blog"
            className="blog__loadmore-btn"
            aria-label="go to blog"
          >
            {t("blog.loadmoreBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
};
