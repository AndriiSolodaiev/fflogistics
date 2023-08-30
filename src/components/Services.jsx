import { breakpoints } from "../constants/breakpoints";
import { servicesCards } from "../dictionary";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { CustomLink } from "atoms/CustomLink";
export const Services = () => {
  const [expandedCards, setExpandedCard] = useState([]);

  const matchesDesktop = useMediaQuery({
    query: `(min-width:${breakpoints.desktop}px)`,
  });
  const { t } = useTranslation();
  const handleClick = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCard((state) => state.filter((cardId) => cardId !== id));

      return;
    }
    setExpandedCard((state) => [...state, id]);

    return;
  };

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
              <li
                key={id}
                className={`services__card ${
                  expandedCards.includes(id) && !matchesDesktop
                    ? "services__card--is-expanded"
                    : ""
                }`}
                onClick={() => {
                  handleClick(id);
                }}
              >
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
                    <p className="card__descr">{t(`services.insurance`)}</p>

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
                    <CustomLink
                      linkClass="button-common service__btn"
                      to={`${ref}`}
                      ariaLabel="go to the page with detailed information about this service"
                      text={t(`services.card${id}.btn`)}
                    />
                    {/* <Link
                      to={`${ref}`}
                      className="button-common service__btn"
                      aria-label="go to the page with detailed information about this service"
                    >
                      {t(`services.card${id}.btn`)}
                    </Link> */}
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
