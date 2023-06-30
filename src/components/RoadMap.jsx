import { roadMapPoints } from "../dictionary";
import { useTranslation } from "react-i18next";
import { imgSrcMaker } from "../helpers/imgSrcMaker";
import { breakpoints } from "../constants/breakpoints";

export const RoadMap = () => {
  const { t } = useTranslation();

  return (
    <section className="roadmap-section">
      <div className="container roadmap-container">
        <h2 className="roadmap__title">{t("roadmap.title")}</h2>
        <div className="roadmap__points-wrapper">
          <picture className="roadmap__points-img">
            <source
              srcSet={imgSrcMaker("/desktop/points-desktop.png")}
              media={`(min-width: ${breakpoints.desktop}px)`}
            />

            <source
              srcSet={imgSrcMaker("tablet/points-tablet.png")}
              media={`(min-width: ${breakpoints.tablet}px)`}
            />

            <img
              loading="lazy"
              src={imgSrcMaker("tablet/points-tablet.png")}
              alt="points"
            />
          </picture>
          <ul className="roadmap__list">
            {roadMapPoints.map(({ hrefIcon, id }) => {
              return (
                <li key={id} className="roadmap__item">
                  <div className="roadmap__icon-wrapper">
                    <svg className="roadmap__icon">
                      <use href={hrefIcon}></use>
                    </svg>
                  </div>
                  <h3 className="roadmap__item-title">
                    {t(`roadmap.point${id}.title`)}
                  </h3>
                  <p className="roadmap__item-descr">
                    {t(`roadmap.point${id}.descr`)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
