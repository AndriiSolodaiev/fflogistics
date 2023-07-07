import { articlesArray } from "articles/articlesArray";
import { ClientForm } from "../components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { articleId } = useParams();

  return (
    <>
      {articlesArray[articleId - 1]}
      <ClientForm />
    </>
  );
};
export default ArticlePage;
