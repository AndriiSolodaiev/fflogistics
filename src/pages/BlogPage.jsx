import { ClientForm } from "../components";

import { useEffect } from "react";
import { blogImages } from "dictionary";

import { BlogCard } from "atoms";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="blog-page__title-wrapper">
        <h2 className="blog-page__title">Блог</h2>
      </div>
      <div className=" blog-page__list-wrapper ">
        <ul className="container blog-page__list">
          {blogImages.map(({ id, img, date }) => (
            <BlogCard id={id} img={img} date={date} key={id} />
          ))}
        </ul>
      </div>

      <ClientForm />
    </section>
  );
};
export default BlogPage;
