import { svgHrefMaker } from "helpers";
import { useTranslation } from "react-i18next";

export const TransInfoCards = () => {
  const { t } = useTranslation();

  return (
    <ul className="info-card__list">
      <li className="info-card__item">
        <svg className="info-card__icon">
          <use href={svgHrefMaker("icon-turnkey")}></use>
        </svg>
        <h3 className="info-card__title"> {t("transpages.cardAllTitle")}</h3>
        <ul className="info-card__descr-list">
          {t("transpages.cardAllDescr")
            .split("&")
            .map((item, index) => (
              <li key={index} className="info-card__descr">
                {item}
              </li>
            ))}
        </ul>
      </li>
      <li className="info-card__item">
        <svg className="info-card__icon">
          <use href={svgHrefMaker("icon-for-companies")}></use>
        </svg>

        <h3 className="info-card__title">{t("transpages.cardCompanyTitle")}</h3>

        <ul className="info-card__descr-list">
          {t("transpages.cardCompanyDescr")
            .split("&")
            .map((item, index) => (
              <li key={index} className="info-card__descr ">
                {item}
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};
