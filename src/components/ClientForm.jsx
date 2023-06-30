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
              >
                <svg className=" space__btn-close">
                  <use href={svgHrefMaker("icon-cross")}></use>
                </svg>
              </button>
              <FormSubmitted background="light" />
            </div>
          ) : (
            <>
              <div className="client-form__header">
                <Link to="/" className="logo">
                  <picture>
                    <source
                      srcSet={`${imgSrcMaker(
                        "desktop/logo-desktop.png"
                      )} 1x, ${imgSrcMaker("desktop/logo-desktop@2x.png")} 2x`}
                      media={`(min-width: ${breakpoints.desktop}px)`}
                    />
                    <source
                      srcSet={`${imgSrcMaker(
                        "tablet/logo-tablet.png"
                      )} 1x, ${imgSrcMaker("tablet/logo-tablet@2x.png")} 2x`}
                      media={`(min-width: ${breakpoints.tablet}px)`}
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
                background="light"
              />
            </>
          )}
        </div>
        <div className="client-form__content-wrapper">
          <h3 className="contacts__title">Наші контакти</h3>
          <ul className="contact-list">
            <li className="contact__link--schedule">
              <svg className="contact__icon--phone">
                <use href={svgHrefMaker("icon-schedule")}></use>
              </svg>
              <p className="schedule">{t("clientform.schedule")}</p>
            </li>
            <li>
              <a href="tel:+380930569981" className="contact__link">
                <svg className="contact__icon--phone">
                  <use href={svgHrefMaker("icon-phone")}></use>
                </svg>
                <p>+380 93 056 99 81</p>
              </a>
            </li>
            <li>
              <a href="mailto:Logistic@gmail.com" className="contact__link ">
                <svg className="contact__icon--email">
                  <use href={svgHrefMaker("icon-email")}></use>
                </svg>
                <p>Logistic@gmail.com</p>
              </a>
            </li>
            <li>
              <a href="" className="contact__link ">
                <svg className="contact__icon--location">
                  <use href={svgHrefMaker("icon-location")}></use>
                </svg>
                <p>{t("clientform.location")}</p>
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