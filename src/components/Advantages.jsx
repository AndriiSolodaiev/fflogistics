import { breakpoints } from "../constants/breakpoints";
import { advantagesCards } from "../dictionary";
import { useTranslation } from "react-i18next";

export const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className="advantages-section">
      <div className="container">
        <h2 className="advantages__title">{t("advantages.title")}</h2>
        <div>
          <ul className="advantages__list">
            {advantagesCards.map(
              ({
                imgMobile,
                imgMobile2x,
                imgTablet,
                imgTablet2x,
                imgDesktop,
                imgDesktop2x,
                id,
                size,
              }) => (
                <li key={id} className="advantages__item">
                  <div className="advantage__img-wrapper">
                    <picture>
                      <source
                        srcSet={`${imgDesktop} 1x, ${imgDesktop2x} 2x`}
                        media={`(min-width: ${breakpoints.desktop}px)`}
                      />

                      <source
                        srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
                        media={`(min-width: ${breakpoints.tablet}px)`}
                      />

                      <source
                        srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`}
                        media={`(min-width: ${breakpoints.mobile}px)`}
                      />

                      <img
                        loading="lazy"
                        src={imgMobile}
                        alt="logo"
                        className="advantage__img"
                      />
                    </picture>
                  </div>
                  <div className="advantage__text-wrapper">
                    <h3 className="advantages__item-title">
                      {t(`advantages.item${id}.title`)}
                    </h3>
                    <p className="advantages__descr">
                      {t(`advantages.item${id}.description`)}
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
