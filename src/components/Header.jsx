import { Navigation, Socials } from "../atoms";
import { svgHrefMaker } from "../helpers";
import { useToggle } from "../hooks/useToggle";
import { ModalMenu } from "./ModalMenu";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { imgSrcMaker } from "../helpers/imgSrcMaker";
import { Link } from "react-router-dom";
export const Header = () => {
  const { isOpen, open, close, toggle } = useToggle();
  const { i18n } = useTranslation();

  return (
    <header>
      <div className="header__container">
        <div className="container header__main-wrapper ">
          <MediaQuery minWidth={breakpoints.tablet}>
            <div className="header__socials-email-wrap">
              <Socials />
              <a
                href="mailto:ffl@fflogistics@gmail.com"
                className="header_contact__link"
              >
                <svg className="header__icon-email--tablet">
                  <use href={svgHrefMaker("icon-email")}></use>
                </svg>
                fflogistics@gmail.com
              </a>
            </div>
          </MediaQuery>
          <Link to="/" className="logo">
            <picture>
              <source
                srcSet={`${imgSrcMaker(
                  "desktop/logo-desktop.png"
                )} 1x, ${imgSrcMaker("desktop/logo-desktop@2x.png")} 2x`}
                media={`(min-width: ${breakpoints.desktop}px)`}
              />

              <source
                srcSet={`${imgSrcMaker(
                  "tablet/logo-tablet.png"
                )} 1x, ${imgSrcMaker("tablet/logo-tablet@2x.png")} 2x`}
                media={`(min-width: ${breakpoints.tablet}px)`}
              />

              <source
                srcSet={`${imgSrcMaker(
                  "mobile/logo-mobile.png"
                )} 1x, ${imgSrcMaker("mobile/logo-mobile@2x.png")} 2x`}
                media={`(min-width: ${breakpoints.mobile}px)`}
              />

              <img
                loading="lazy"
                src={imgSrcMaker("mobile/logo-mobile.png")}
                alt="logo"
              />
            </picture>
          </Link>

          <ul className="header__contacts-list">
            <li className="header__phone-mobile">
              <a href="tel:+380930569981">
                <svg className="phone-icon">
                  <use href={svgHrefMaker("icon-phone")}></use>
                </svg>
              </a>
            </li>
            <li className="header__email-mobile">
              <a href="mailto:ffl@fflogistics@gmail.com">
                <svg className="email-icon">
                  <use href={svgHrefMaker("icon-email")}></use>
                </svg>
              </a>
            </li>
          </ul>
          <div className="language-btn-wrapper">
            <button
              className={`language-btn
              ${i18n.resolvedLanguage === "uk" ? "language-btn--active" : ""}`}
              onClick={() => i18n.changeLanguage("uk")}
            >
              ua
            </button>
            <span className="button__btw-line">|</span>
            <button
              className={`language-btn
              ${i18n.resolvedLanguage === "ru" ? "language-btn--active" : ""}`}
              onClick={() => i18n.changeLanguage("ru")}
            >
              ru
            </button>
          </div>
          <MediaQuery minWidth={breakpoints.tablet}>
            <button type="button"></button>
            <a href="tel:+380930569981" className="header_contact__link">
              <svg className="header__icon-phone--tablet">
                <use href={svgHrefMaker("icon-phone")}></use>
              </svg>
              +380 93 056 99 81
            </a>
          </MediaQuery>

          <button type="button" className="header__burger-menu" onClick={open}>
            <svg className="header__menu-icon">
              <use href={svgHrefMaker("icon-menu")}></use>
            </svg>
          </button>
        </div>
        <MediaQuery minWidth={breakpoints.tablet}>
          <div className="container nav__bg">
            <Navigation />
          </div>
        </MediaQuery>
        <ModalMenu isOpen={isOpen} onClose={close} />
      </div>
    </header>
  );
};
