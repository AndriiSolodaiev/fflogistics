import { Form, FormSubmitted } from "../atoms";
import { svgHrefMaker } from "../helpers";
import { useState } from "react";

import { useTranslation } from "react-i18next";
export const ModalForm = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { t } = useTranslation();

  const submitHandler = (result) => {
    setFormSubmitted(result);
  };

  return (
    <div
      className={`backdrop ${isOpen && "backdrop-is-visible"}`}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-form__container">
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
          aria-label="close thanks window"
        >
          <svg className="modal__icon-close">
            <use href={svgHrefMaker("icon-cross")}></use>
          </svg>
        </button>
        {formSubmitted ? (
          <FormSubmitted background={""} />
        ) : (
          <div className="modal-form__container--form">
            <h2 className="modal-form__title">{t("modalform.main-title")}</h2>
            <p className="modal-form__descr">{t("modalform.main-descr")}</p>
            <Form submitHandler={submitHandler} background={""} />
          </div>
        )}
      </div>
    </div>
  );
};
