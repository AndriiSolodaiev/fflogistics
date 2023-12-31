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
        <div className="container blog-page__list">
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
        </div>
      </div>

      <ClientForm />
    </section>
  );
};
export default BlogPage;
