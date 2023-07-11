import { ClientForm } from "components";
import { Helmet } from "react-helmet";

const ReviewsPage = () => {
  return (
    <>
      <section className="reviews-section ">
        <Helmet>
          <script
            type="text/javascript"
            src="https://api.otzyvua.net/reviews.js"
            async
          />
          <script
            type="text/javascript"
            src="//api.otzyvua.net/widget.js"
            async
          />
        </Helmet>
        <div className="container reviews-widjet__wrapper">
          <ins
            className="widgetbyotzyvua"
            data-theme="light"
            data-lang="uk"
            style={{
              display: "inline-block",
              width: "225px",
              height: "80px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
            data-item-id="62941"
          >
            {/* eslint-disable-next-line */}
            <a
              href="https://www.otzyvua.net/uk/full-freight-logistics"
              target="_blank"
              rel="noreferrer"
              aria-label="Go to section"
            ></a>
          </ins>
        </div>
        <ins class="otzyvua_widget" data-item-id="62941"></ins>
      </section>
      <ClientForm />
    </>
  );
};
export default ReviewsPage;
