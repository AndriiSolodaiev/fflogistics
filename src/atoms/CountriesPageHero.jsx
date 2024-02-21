import { Form } from "./Form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FormSubmitted } from "./FormSubmitted";
import { svgHrefMaker } from "../helpers";
export const CountryHeroTemplate = ({
  title,
  classBg,
  tariff,
  terms,
  page,
  unit,
  disclaimer,
  sale,
}) => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <section className=" countries-hero__wrapper">
      <div className={`page-hero__container--countries ${classBg}`}>
        <div className="container contries__blocks-wrapper">
          <div>
            <div className="route-wrapper">
              <p className="route-text">{page}</p>
              <svg className="route-icon">
                <use href={svgHrefMaker("icon-arrow")} />
              </svg>
              <p className="route-text">{unit}</p>
            </div>
            <h2 className="page-title page-title--countries">{title}</h2>
            {disclaimer && (
              <p className="page-hero__disclaimer">
                {t("services.disclaimer")}
              </p>
            )}
            <p className="page-hero__info--countries">
              <span className="page-hero__info-title--countries">
                {t("countriespages.SthKorea.tariff.title")}
              </span>
              {tariff}
            </p>
            <p className="page-hero__info--countries">
              <span className="page-hero__info-title--countries">
                {t("countriespages.SthKorea.terms.title")}
              </span>
              {terms}
            </p>
            {sale && (
              <p className="page-hero__info--countries">
                {t("transpages.air.sale")}
              </p>
            )}
          </div>
          <div className="page-hero__form-wrap">
            {formSubmitted ? (
              <div>
                <button
                  className="countries__close-btn"
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  aria-label="open modal window"
                >
                  <svg className="modal__icon-close ">
                    <use href={svgHrefMaker("icon-cross")}></use>
                  </svg>
                </button>
                <FormSubmitted background="" />
              </div>
            ) : (
              <div>
                <h3 className="page-hero__form-title--countries">
                  {t("transpages.formtitle")}
                </h3>
                <p className="page-hero__form-descr--countries">
                  {t("transpages.formdescr")}
                </p>
                <Form
                  submitHandler={(result) => setFormSubmitted(result)}
                  background={""}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
