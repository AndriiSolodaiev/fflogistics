import { ModalForm } from "./ModalForm";
import { useToggle } from "../hooks/useToggle";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { svgHrefMaker } from "../helpers";
import { BtnOpenModal, Socials } from "../atoms";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

// import TimerPromo from "atoms/TimerPromo";

export const Hero = () => {
  const { isOpen, open, close } = useToggle();
  const { t, i18n } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true, //true
    autoplaySpeed: 7000,
    arrows: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const matchesDesktop = useMediaQuery({
    query: `(min-width:${breakpoints.desktop}px)`,
  });

  const supportsWebP = () => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  };

  const backgroundImageTablet = supportsWebP() ? "webp" : "png";
  const backgroundImageDesktop = supportsWebP() ? "webp" : "png";
  return (
    <section className="hero">
      <MediaQuery minWidth={breakpoints.tablet}>
        <Slider {...sliderSettings}>
          <div className=" hero__bgimg" data-slick-autoplay="10000">
            <div className="container hero__container">
              <h1
                className={
                  i18n.resolvedLanguage === "uk"
                    ? "hero__title"
                    : "hero__title hero__title--ru"
                }
              >
                {t("hero.title")}
              </h1>
              <span className="hero__subtitle">{t("hero.subtitle")}</span>
              <div className="hero__advantages-wrapper">
                <ul className="hero__advantages-list">
                  {t("hero.advantages")
                    .split("$")
                    .map((item, index) => (
                      <li className="hero__advantages-item" key={index}>
                        <svg className="hero__advantages-icon">
                          <use href={svgHrefMaker("icon-location")}></use>
                        </svg>
                        <p className="hero__advantages-text">{item}</p>
                      </li>
                    ))}
                </ul>
              </div>

              <BtnOpenModal
                openModal={open}
                title={t("hero.button")}
                classBtn="hero__button"
              />
            </div>
          </div>
          {/* Promo start*/}
          {/* <div className=" hero__bgimg promo-bg">
            <div className="container hero__container hero-promo__wrap">
              <h2 className="hero-promo__title">{t("hero.promo.title")}</h2>

              <ul className="hero-promo__list">
                {t("hero.promo.list")
                  .split("&")
                  .map((item, index) => (
                    <li className="" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>

              <TimerPromo />
              <BtnOpenModal
                openModal={open}
                title={t("hero.promo.accent")}
                classBtn="hero-promo__accent"
              />
            </div>
          </div> */}
          {/* Promo end */}
          {t("hero.slidertitles")
            .split("$")
            .map((title, index) => (
              <div key={index}>
                <div
                  className="hero__bgimg container slide__container"
                  style={{
                    backgroundImage: `linear-gradient(#db831f78, #39393950,#393939fd),
                    url(${
                      matchesDesktop
                        ? `./images/desktop/hero-bg/bg${
                            index + 1
                          }-desktop.${backgroundImageDesktop}`
                        : `./images/tablet/hero-bg/bg${
                            index + 1
                          }-tablet.${backgroundImageTablet}`
                    }
                    
                  )`,
                  }}
                >
                  <h2 className="slide__title">{title}</h2>
                  <div className="slide__social">
                    <BtnOpenModal
                      openModal={open}
                      title={t("hero.button")}
                      classBtn="hero__button"
                    />
                    <Socials />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </MediaQuery>
      <MediaQuery maxWidth={breakpoints.tablet - 1}>
        <div className="hero__bgimg">
          <div className="container hero__container">
            <h1
              className={
                i18n.resolvedLanguage === "uk"
                  ? "hero__title"
                  : "hero__title hero__title--ru"
              }
            >
              {t("hero.title")}
            </h1>
            <span className="hero__subtitle">{t("hero.subtitle")}</span>
            <BtnOpenModal
              openModal={open}
              title={t("hero.button")}
              classBtn="hero__button"
            />
          </div>
        </div>
        {/* Promo start*/}
        {/* <div className=" hero__bgimg promo-bg">
          <div className="container hero__container hero-promo__wrap">
            <h2 className="hero-promo__title">{t("hero.promo.title")}</h2>

            <ul className="hero-promo__list">
              {t("hero.promo.list")
                .split("&")
                .map((item, index) => (
                  <li className="" key={index}>
                    {item}
                  </li>
                ))}
            </ul>
            <TimerPromo />
            <BtnOpenModal
              openModal={open}
              title={t("hero.promo.accent")}
              classBtn="hero-promo__accent"
            />
          </div>
        </div> */}
        {/* Promo end */}
      </MediaQuery>

      <ModalForm isOpen={isOpen} onClose={close} />
    </section>
  );
};
