import { useState } from "react";

import { useTranslation } from "react-i18next";
import { svgHrefMaker } from "../helpers";
import { Form, FormSubmitted, Socials } from "../atoms";
import { imgSrcMaker } from "../helpers/imgSrcMaker";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { Link } from "react-router-dom";

export const ClientForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useTranslation();

  const submitHandler = (result) => {
    setFormSubmitted(result);
  };
  return (
    <section className="client-form-section" id="client-form">
      <div className="container client-form__container">
        <div className="client-form__form-space-tablet">
          {formSubmitted ? (
            <div>
              <button
                className="modal__close-btn"
                type="button"
                onClick={() => setFormSubmitted(false)}
                aria-label="close thanks window"
              >
                <svg className=" space__btn-close">
                  <use href={svgHrefMaker("icon-cross")}></use>
                </svg>
              </button>
              <FormSubmitted background="--light" />
            </div>
          ) : (
            <>
              <div className="client-form__header">
                <Link to="/" className="logo" aria-label="go to home page">
                  <picture>
                    <source
                      srcSet={`${imgSrcMaker(
                        "mobile/logo-mobile.webp"
                      )} 1x, ${imgSrcMaker("mobile/logo-mobile@2x.webp")} 2x`}
                      media={`(min-width: ${breakpoints.mobile}px)`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${imgSrcMaker(
                        "mobile/logo-mobile.png"
                      )} 1x, ${imgSrcMaker("mobile/logo-mobile@2x.png")} 2x`}
                      media={`(min-width: ${breakpoints.mobile}px)`}
                    />
                    <img
                      loading="lazy"
                      src={imgSrcMaker("mobile/logo-mobile.png")}
                      alt="logo"
                    />
                  </picture>
                </Link>
                <Socials />
              </div>

              <div className="client-form__content-wrapper">
                <h2 className="client-form__title">{t("clientform.title")}</h2>
                <p className="client-form__subtitle">
                  {t("clientform.subtitle")}
                </p>
              </div>
              <Form
                submitHandler={submitHandler}
                buttonStyle="client-form__btn"
                background="--light"
              />
            </>
          )}
        </div>
        <div className="client-form__content-wrapper">
          <h3 className="contacts__title">{t("clientform.contactsTitle")}</h3>
          <ul className="contact-list">
            <li className="contact__link--schedule">
              <svg className="contact__icon--phone">
                <use href={svgHrefMaker("icon-schedule")}></use>
              </svg>
              <p className="schedule">{t("clientform.schedule")}</p>
            </li>
            <li>
              <a
                href="tel:+380930569981"
                className="contact__link"
                aria-label="call our manager"
              >
                <svg
                  className="contact__icon--phone"
                  width="17"
                  height="17"
                  viewBox="0 0 34 34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.444 15.956c0-3.457-1.208-6.389-3.623-8.797s-5.356-3.612-8.821-3.613v-3.546c2.222 0 4.304 0.421 6.245 1.264s3.63 1.98 5.067 3.413 2.577 3.117 3.422 5.053c0.845 1.936 1.267 4.011 1.266 6.226h-3.556zM21.333 15.956c0-1.477-0.519-2.733-1.556-3.767s-2.296-1.551-3.778-1.551v-3.546c2.459 0 4.556 0.865 6.29 2.594s2.6 3.819 2.599 6.271h-3.555zM30.133 32c-3.822 0-7.549-0.842-11.179-2.526s-6.845-3.93-9.644-6.737c-2.799-2.807-5.051-6.021-6.756-9.641s-2.556-7.335-2.555-11.146v-0.931c0-0.325 0.030-0.635 0.089-0.931h10.4l1.644 8.909-5.067 5.097c1.244 2.127 2.808 4.122 4.69 5.983s3.948 3.472 6.199 4.831l5.156-5.141 8.889 1.773v10.371c-0.296 0.030-0.607 0.052-0.933 0.067s-0.637 0.022-0.933 0.021z"></path>
                </svg>
                <p>+380 93 056 99 81</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:v@fflogistics.com.ua"
                className="contact__link "
                aria-label="write to us by e-mail"
              >
                <svg className="contact__icon--email">
                  <use href={svgHrefMaker("icon-email")}></use>
                </svg>
                <p>v@fflogistics.com.ua</p>
              </a>
            </li>
          </ul>
          <MediaQuery minWidth={breakpoints.tablet}>
            <Socials />
          </MediaQuery>
        </div>
      </div>
    </section>
  );
};
