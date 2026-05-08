import { ClientForm } from "../components";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getBlogPostById,
  normalizeList,
} from "../content/blogPosts";
import { imgSrcMaker } from "helpers/imgSrcMaker";

const renderBlock = (block, content, language) => {
  if (!block || !content) return null;

  const value = content[block.key];
  if (!value) return null;

  if (block.type === "title") {
    return <li className="article-content__list-title">{value}</li>;
  }

  if (block.type === "paragraph") {
    return <li>{value}</li>;
  }

  if (block.type === "image") {
    const alt = block.alt?.[language] || block.alt?.uk || "Article image";

    return (
      <li className="article-content__img-wrapper">
        <img
          src={imgSrcMaker(value)}
          alt={alt}
          className="article-content__img"
        />
      </li>
    );
  }

  if (block.type === "ordered-list") {
    return (
      <li>
        <ol className={`${block.className || "list-sea"} article-content__ordered-list`}>
          {normalizeList(value).map((item, index) => (
            <li key={index} className={block.itemClassName || ""}>
              {item}
            </li>
          ))}
        </ol>
      </li>
    );
  }

  if (block.type === "unordered-list") {
    return (
      <li>
        <ul className={`${block.className || "content__list"} article-content__bullet-list`}>
          {normalizeList(value).map((item, index) => (
            <li key={index} className={block.itemClassName || ""}>
              {item}
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return null;
};

const ArticlePage = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { articleId } = useParams();
  const normalizedLanguage = i18n.language === "ru" ? "ru" : "uk";
  const post = getBlogPostById(articleId, normalizedLanguage);

  if (!post) {
    return (
      <>
        <section className="article-content__section">
          <div className="container" style={{ paddingTop: 40 }}>
            <h2 className="article-contet__title">
              {normalizedLanguage === "ru"
                ? "Статья не найдена"
                : "Статтю не знайдено"}
            </h2>
          </div>
        </section>
        <ClientForm />
      </>
    );
  }

  const articlePath = `blogpages.article${post.id}`;
  const i18nContent = t(`${articlePath}.content`, { returnObjects: true });
  const content =
    i18nContent && typeof i18nContent === "object" && !Array.isArray(i18nContent)
      ? i18nContent
      : post.content;
  const title = t(`${articlePath}.title`, { defaultValue: post.title });

  return (
    <>
      <section className="article-content__section">
        <div className="article__hero-bg">
          <picture className="article__hero-picture">
            <source srcSet={post.cover.imgWebp} type="image/webp" />
            <img
              src={post.cover.img}
              alt={title}
              title={title}
              className="article__hero-img"
            />
          </picture>
          <h2 className="article-contet__title">{title}</h2>
        </div>
        <div className="article__list-wrapper">
          <ul className="container content__list">
            {post.layout.map((block, index) => (
              <Fragment key={`${post.id}-${index}`}>
                {renderBlock(block, content, normalizedLanguage)}
              </Fragment>
            ))}
          </ul>
        </div>
      </section>
      <ClientForm />
    </>
  );
};
export default ArticlePage;
