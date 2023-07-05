import { Socials } from "./Socials";
import { useTranslation } from "react-i18next";
export const FormSubmitted = ({ background }) => {
  const { t } = useTranslation();
  return (
    <div className={`form-submitted__container${background}`}>
      <h2 className={`form-submitted__title${background}`}>
        {t("modalform.thanks-title")}
      </h2>

      <p className={`form-submitted__descr${background}`}>
        {t("modalform.thanks-descr")}
      </p>
      <Socials />
    </div>
  );
};
