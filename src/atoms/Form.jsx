import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import * as yup from "yup";
import { useState } from "react";
import InputMask from "react-input-mask";

export const Form = ({ submitHandler, buttonStyle, background }) => {
  const [state, handleSubmit] = useForm("myyqypaq");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(t("form.validation.name-required"))
      .min(2, t("form.validation.name-pattern")),
    phone: yup
      .string()
      .required(t("form.validation.phone-required"))
      .test("len", t("form.validation.phone-pattern"), (val) => {
        const val_length_without_dashes = val.replace(/_/g, "").length;
        return val_length_without_dashes === 17;
      }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); 
    console.log(name + "asd" + value)
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    await submitHandler(true);
  };

  const handleBlurValidation = async (e) => {
    const { name, value } = e.target;

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.errors[0] }));
    }
  };

  return (
    <form
      className={`form__container${background}`}
      onSubmit={handleSubmitForm}
    >
      <input
        className={`form__input${background} ${
          errors.name && `form__input-error${background}`
        }`}
        type="text"
        name="name"
        placeholder={t("form.placeholders.name")}
        onBlur={handleBlurValidation}
        onChange={handleChange}
      />
      {errors.name && (
        <div className={`form__validation-message${background}`}>
          {errors.name}
        </div>
      )}
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <InputMask
        mask="+380(99)999-99-99"
        maskPlaceholder="_"
        className={`form__input${background} ${
          errors.phone && `form__input-error${background}`
        }`}
        type="tel"
        name="phone"
        placeholder={t("form.placeholders.phone")}
        onBlur={handleBlurValidation}
        onChange={handleChange}
      />

      {errors.phone && (
        <div className={`form__validation-message${background}`}>
          {errors.phone}
        </div>
      )}

      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <textarea
        className={`form__textarea${background}`}
        type="text"
        name="message"
        placeholder={t("form.placeholders.message")}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className={`button-common  ${
          buttonStyle ? buttonStyle : ""
        } form__button${background}`}
        disabled={
          errors.name || errors.phone || !formData.name || !formData.phone
            ? true
            : false
        }
        aria-label="send form information"
      >
        {t("form.submitbutton")}
      </button>
    </form>
  );
};
