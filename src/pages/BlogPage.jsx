import { ClientForm } from "../components";

import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { BlogCard } from "atoms";
import { getBlogCards } from "../content/blogPosts";

const CARDS_PER_PAGE = 10;
const LOAD_MORE_STEP = 10;

const getPaginationItems = (totalPages, currentPage) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "ellipsis-right", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis-left", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "ellipsis-left",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-right",
    totalPages,
  ];
};

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const cards = getBlogCards(i18n.language);
  const totalPages = Math.max(1, Math.ceil(cards.length / CARDS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const [extraByPage, setExtraByPage] = useState({});

  useEffect(() => {
    // Reset pagination when language/content source changes.
    setCurrentPage(1);
    setExtraByPage({});
  }, [i18n.language]);

  const pageStart = (currentPage - 1) * CARDS_PER_PAGE;
  const extraOnCurrentPage = extraByPage[currentPage] || 0;
  const pageEnd = pageStart + CARDS_PER_PAGE + extraOnCurrentPage;
  const pageCards = useMemo(
    () => cards.slice(pageStart, pageEnd),
    [cards, pageStart, pageEnd]
  );
  const paginationItems = getPaginationItems(totalPages, currentPage);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const canLoadMore = pageEnd < cards.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="blog-page__title-wrapper">
        <h2 className="blog-page__title">{t("blog.title")}</h2>
      </div>
      <div className=" blog-page__list-wrapper ">
        <div className="container blog-page__list">
          {pageCards.map(({ id, img, imgWebp, date, title, intro }) => {
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

          <div className="blog-page__controls">
            <div className="blog-page__pagination">
              <button
                type="button"
                className="blog-page__arrow-btn blog-page__arrow-btn--prev"
                onClick={() => canGoPrev && setCurrentPage((prev) => prev - 1)}
                disabled={!canGoPrev}
                aria-label={t("blogpages.paginationPrev", {
                  defaultValue: "Попередня сторінка",
                })}
              >
                <span className="blog-page__arrow-icon" aria-hidden="true"></span>
              </button>

             

              <div className="blog-page__page-list" aria-label="pagination">
                {paginationItems.map((item, idx) => {
                  if (typeof item !== "number") {
                    return (
                      <span className="blog-page__page-dots" key={`${item}-${idx}`}>
                        ...
                      </span>
                    );
                  }

                  return (
                    <button
                      type="button"
                      className={`blog-page__page-btn ${
                        currentPage === item ? "blog-page__page-btn--active" : ""
                      }`}
                      key={item}
                      onClick={() => setCurrentPage(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className="blog-page__arrow-btn blog-page__arrow-btn--next"
                onClick={() => canGoNext && setCurrentPage((prev) => prev + 1)}
                disabled={!canGoNext}
                aria-label={t("blogpages.paginationNext", {
                  defaultValue: "Наступна сторінка",
                })}
              >
                <span className="blog-page__arrow-icon" aria-hidden="true"></span>
              </button>
            </div>

            {canLoadMore && (
              <button
                type="button"
                className="blog-page__loadmore-btn"
                onClick={() =>
                  setExtraByPage((prev) => ({
                    ...prev,
                    [currentPage]: (prev[currentPage] || 0) + LOAD_MORE_STEP,
                  }))
                }
              >
                {t("blog.loadmoreBtn")}
              </button>
            )}
          </div>
        </div>
      </div>

      <ClientForm />
    </section>
  );
};
export default BlogPage;
