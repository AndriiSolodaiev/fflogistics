import { breakpoints } from "../constants/breakpoints";
import { advantagesCards } from "../dictionary";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

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
                imgMobileWebp,
                imgMobileWebp2x,
                imgTabletWebp,
                imgTabletWebp2x,
                imgDesktopWebp,
                imgDesktopWebp2x,
                imgMobile,
                imgMobile2x,
                imgTablet,
                imgTablet2x,
                imgDesktop,
                imgDesktop2x,
                id,
              }) => (
                <li key={id} className="advantages__item">
                  <div className="advantage__img-wrapper">
                    <picture>
                      <source
                        srcSet={`${imgDesktopWebp} 1x, ${imgDesktopWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.desktop}px)`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${imgDesktop} 1x, ${imgDesktop2x} 2x`}
                        media={`(min-width: ${breakpoints.desktop}px)`}
                      />

                      <source
                        srcSet={`${imgTabletWebp} 1x, ${imgTabletWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.tablet}px)`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
                        media={`(min-width: ${breakpoints.tablet}px)`}
                      />

                      <source
                        srcSet={`${imgMobileWebp} 1x, ${imgMobileWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.mobile}px)`}
                        type="image/webp"
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
                    <ul className="advantages__descr">
                      {t(`advantages.item${id}.description`)
                        .split("&")
                        .map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="advantages__reviews-btn">
            <Link to="/reviews" className="button-common">
              {t(`advantages.reviews-btn`)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
