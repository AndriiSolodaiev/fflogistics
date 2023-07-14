import { Form } from "./Form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FormSubmitted } from "./FormSubmitted";
import { svgHrefMaker } from "../helpers";
export const TransHeroTemplate = ({ title, classBg, disclaimer }) => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <section className={`page-hero__wrapper ${classBg}`}>
      <div className="container page-hero__container">
        <h2 className="page-title">{title}</h2>
        {disclaimer && (
          <p className="page-hero__disclaimer">{t("services.disclaimer")}</p>
        )}
        <div className="page-hero__form-wrap">
          {formSubmitted ? (
            <>
              <button
                className="modal__close-btn page-hero__close-btn"
                type="button"
                onClick={() => setFormSubmitted(false)}
                aria-label="close modal window"
              >
                <svg className="modal__icon-close">
                  <use href={svgHrefMaker("icon-cross")}></use>
                </svg>
              </button>
              <FormSubmitted background={""} />
            </>
          ) : (
            <>
              <h3 className="page-hero__form-title">
                {t("transpages.formtitle")}
              </h3>
              <p className="page-hero__form-descr">
                {t("transpages.formdescr")}
              </p>
              <Form
                submitHandler={() => setFormSubmitted(true)}
                background={""}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
