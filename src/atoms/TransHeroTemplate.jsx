import { useTranslation } from "react-i18next";
import { BtnOpenModal } from "./BtnOpenModal";
import { ModalForm } from "components";
import { useToggle } from "hooks/useToggle";

export const TransHeroTemplate = ({
  title,
  classBg,
  disclaimer,
  tariff,
  terms,
}) => {
  const { t } = useTranslation();

  const { isOpen, open, close } = useToggle();
  return (
    <section className={`page-hero__wrapper ${classBg}`}>
      <div className="container page-hero__container">
        <h2 className="page-title page-title--margin">{title}</h2>
        {disclaimer && (
          <p className="page-hero__disclaimer">{t("services.disclaimer")}</p>
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
        <p className="page-hero__info--countries">{t("transpages.air.sale")}</p>
        <BtnOpenModal
          openModal={open}
          title={t("transpages.formtitle")}
          classBtn="page-hero__form-title"
        />

        {/* <div className="page-hero__form-wrap"> */}
        {/* {formSubmitted ? (
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
                buttonStyle="page-hero__form-button"
              />
            </>
          )} */}
        {/* </div> */}
      </div>
      {isOpen && <ModalForm isOpen={isOpen} onClose={close} />}
    </section>
  );
};
