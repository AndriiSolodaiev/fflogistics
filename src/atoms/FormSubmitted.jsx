import { svgHrefMaker } from "../helpers";
import { Socials } from "./Socials";
import { useTranslation } from "react-i18next";
export const FormSubmitted = ({ background }) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        background === "light"
          ? "form-submitted__container--light"
          : "form-submitted__container"
      }
    >
      <h2
        className={
          background === "light"
            ? "form-submitted__title--light"
            : "form-submitted__title"
        }
      >
        {t("modalform.thanks-title")}
      </h2>

      <p
        className={
          background === "light"
            ? "form-submitted__descr--light"
            : "form-submitted__descr"
        }
      >
        {t("modalform.thanks-descr")}
      </p>
      <Socials />
    </div>
  );
};
