import { Link } from "react-router-dom";
import { breakpoints } from "../constants/breakpoints";
import { servicesCards } from "../dictionary";
import { useTranslation } from "react-i18next";
export const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="container ">
        <h2 hidden>Послуги</h2>
        <ul className="services__container">
          {servicesCards.map(
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
              alt,
              ref,
              id,
            }) => (
              <li key={id} className="services__card">
                {id === 3 && (
                  <p className="service-card__disclaimer">
                    {t("services.disclaimer")}
                  </p>
                )}
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
                    alt={alt}
                    className="services__img"
                  />
                </picture>

                <div className="services__info-wrapper-static">
                  <div className="services__text-wrapper">
                    <h3 className="card__title">
                      {t(`services.card${id}.title`)}
                    </h3>
                    <p className="card__descr">
                      {t(`services.card${id}.descr`)}
                    </p>
                    {id === 1 && (
                      <p className="card__descr">
                        {t(`services.card1.descr--add`)}{" "}
                      </p>
                    )}

                    <ul>
                      {t(`services.card${id}.time`)
                        .split("&")
                        .map((item, index) => (
                          <li key={index} className="card__time ">
                            <b>{item}</b>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="services__btn-wrapper">
                    <Link
                      to={`${ref}`}
                      className="button-common service__btn"
                      type="button"
                    >
                      {t(`services.card${id}.btn`)}
                    </Link>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
