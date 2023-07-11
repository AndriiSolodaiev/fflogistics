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
        <p className="info-card__descr">{t("transpages.cardAllDescr")}</p>
      </li>
      <li className="info-card__item">
        <svg className="info-card__icon">
          <use href={svgHrefMaker("icon-for-companies")}></use>
        </svg>

        <h3 className="info-card__title">{t("transpages.cardCompanyTitle")}</h3>
        <p className="info-card__descr">{t("transpages.cardCompanyDescr")}</p>
      </li>
    </ul>
  );
};
