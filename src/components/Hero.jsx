import { ModalForm } from "./ModalForm";
import { useEffect, useRef } from "react";
import { useToggle } from "../hooks/useToggle";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { svgHrefMaker } from "../helpers";
import { BtnOpenModal, Socials } from "../atoms";
import Slider from "react-slick";

// import TimerPromo from "atoms/TimerPromo";

export const Hero = () => {
  const { isOpen, open, close } = useToggle();
  const { t, i18n } = useTranslation();
  const heroSectionRef = useRef(null);
  const heroVideoRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true, //true
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  useEffect(() => {
    const heroNode = heroSectionRef.current;
    const videoNode = heroVideoRef.current;

    if (!heroNode || !videoNode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoNode) {
          return;
        }

        if (entry.isIntersecting) {
          const playPromise = videoNode.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          videoNode.pause();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(heroNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = previousOverflow || "";
    }

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <section
      className={`hero ${isOpen ? "backdrop-is-visible" : ""}`}
      ref={heroSectionRef}
    >
      <video
        className="hero__video"
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        preload="auto"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero__content">
        <MediaQuery minWidth={breakpoints.tablet}>
          <div className="hero__slider-wrap">
            <Slider {...sliderSettings}>
              <div className="hero__bgimg" data-slick-autoplay="10000">
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

                  {/* <BtnOpenModal
                    openModal={open}
                    title={t("hero.button")}
                    classBtn="hero__button"
                  /> */}
                </div>
              </div>
              {t("hero.slidertitles")
                .split("$")
                .map((title, index) => (
                  <div key={index}>
                    <div className="hero__bgimg container slide__container">
                      <h2 className="slide__title">{title}</h2>
                    </div>
                  </div>
                ))}
            </Slider>
            <div className="hero__floating-social">
              <BtnOpenModal
                openModal={open}
                title={t("hero.button")}
                classBtn="hero__button"
              />
              <Socials />
            </div>
          </div>
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
        </MediaQuery>
      </div>

      <ModalForm isOpen={isOpen} onClose={close} />
    </section>
  );
};
