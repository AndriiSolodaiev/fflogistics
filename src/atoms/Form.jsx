import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

export const Form = ({ submitHandler, buttonStyle, background }) => {
  const [state, handleSubmit] = useForm("myyqgpnv");
  const { t } = useTranslation();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    // await handleSubmit(event);
    await submitHandler(true);
  };

  return (
    <form
      className={
        background === "light" ? "form__container--light" : "form__container"
      }
      onSubmit={handleSubmitForm}
    >
      <input
        className={
          background === "light" ? "form__input--light" : "form__input"
        }
        type="text"
        name="name"
        required
        placeholder={t("form.placeholders.name")}
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        className={
          background === "light" ? "form__input--light" : "form__input"
        }
        type="text"
        name="phone"
        required
        placeholder={t("form.placeholders.phone")}
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <textarea
        className={
          background === "light" ? "form__textarea--light" : "form__textarea"
        }
        type="text"
        name="message"
        placeholder={t("form.placeholders.message")}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className={`button-common  ${buttonStyle ? buttonStyle : ""} ${
          background === "light" ? "form__button--light" : "form__button"
        }`}
        disabled={state.submitting}
      >
        {t("form.submitbutton")}
      </button>
    </form>
  );
};
