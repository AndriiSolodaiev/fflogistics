import { ModalForm } from "./ModalForm";
import { useToggle } from "../hooks/useToggle";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { svgHrefMaker } from "../helpers";
import { BtnOpenModal, Socials } from "../atoms";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const { isOpen, open, close } = useToggle();
  const { t, i18n } = useTranslation();
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const matchesDesktop = useMediaQuery({
    query: `(min-width:${breakpoints.desktop}px)`,
  });

  return (
    <section>
      <MediaQuery minWidth={breakpoints.tablet}>
        <Slider {...sliderSettings}>
          <div className=" hero__bgimg">
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

              <BtnOpenModal openModal={open} />
            </div>
          </div>
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
                        ? `./images/desktop/hero-bg/bg${index + 1}-desktop.png`
                        : `./images/tablet/hero-bg/bg${index + 1}-tablet.png`
                    }
                    
                  )`,
                  }}
                >
                  <h2 className=" slide__title">{title}</h2>
                  <div className="slide__social">
                    <BtnOpenModal openModal={open} />
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
            <BtnOpenModal openModal={open} />
          </div>
        </div>
      </MediaQuery>

      <ModalForm isOpen={isOpen} onClose={close} />
    </section>
  );
};
