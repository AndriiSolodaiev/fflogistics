import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { BlogCard } from "atoms";
import { CustomLink } from "atoms/CustomLink";
import { getBlogCards } from "../content/blogPosts";

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
  const { t, i18n } = useTranslation();
  const cards = getBlogCards(i18n.language);

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
          {cards.map(({ id, img, imgWebp, date, title, intro }) => {
            const i18nTitle = t(`blogpages.article${id}.title`, {
              defaultValue: title,
            });
            const i18nIntro = t(`blogpages.article${id}.content.intro`, {
              defaultValue: intro,
            });

            return (
              <BlogCard
                id={id}
                img={img}
                imgWebp={imgWebp}
                date={date}
                title={i18nTitle}
                intro={i18nIntro}
                key={id}
              />
            );
          })}
        </Slider>

        <div className="blog-container">
          <CustomLink
            linkClass="blog__loadmore-btn"
            to="/blog"
            ariaLabel="go to blog"
            text={t("blog.allBtn")}
          />
          {/* <Link
            to="/blog"
            className="blog__loadmore-btn"
            aria-label="go to blog"
          >
            {t("blog.loadmoreBtn")}
          </Link> */}
        </div>
      </div>
    </section>
  );
};
