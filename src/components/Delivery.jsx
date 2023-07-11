import { deliveryCards } from "../dictionary";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export const Delivery = () => {
  const [isExpanded, setIsExpanded] = useState(0);
  const { t } = useTranslation();

  const handleClick = (id) => {
    if (isExpanded === id) {
      setIsExpanded(0);
      return;
    }
    setIsExpanded(id);
  };

  return (
    <section className="delivery-section">
      <div className="container">
        <h2 className="delivery__title">{t("delivery.title")}</h2>
        <p className="delivery__subtitle">
          {t("delivery.subtitle_first-part")}
          <span className="subtitle-span">
            {t("delivery.subtitle_span")}
          </span>{" "}
          {t("delivery.subtitle_sec-part")}
        </p>
        <p className="delivery__descr">{t("delivery.description")}</p>
        <div>
          <ul
            className={`delivery__list ${
              isExpanded ? "delivery__list--is-expanded" : ""
            }`}
          >
            {deliveryCards.map(({ id, hrefIcon }) => (
              <li
                key={id}
                onClick={() => handleClick(id)}
                className={`delivery__card ${
                  isExpanded === id ? "card__is-expanded" : ""
                }`}
              >
                <div className="card__number">0{id}.</div>
                <div className="delivery__card-title-wrap">
                  <svg className="delivery__icon">
                    <use href={hrefIcon}></use>
                  </svg>

                  <h3 className="delivery-card__title">
                    {t(`delivery.card${id}.title`)}
                    <span className="delivery-card__title--span">
                      {" "}
                      {t(`delivery.card${id}.title-span`)}
                    </span>
                  </h3>
                </div>
                <ul className="list__details">
                  {t(`delivery.card${id}.description`)
                    .split("&")
                    .map((item, index) => (
                      <li key={index} className="card__datails">
                        {item}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
