import { Navigation, Socials } from "../atoms";
import { svgHrefMaker } from "../helpers";
import { useToggle } from "../hooks/useToggle";
import { ModalMenu } from "./ModalMenu";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import { breakpoints } from "../constants/breakpoints";
import { imgSrcMaker } from "../helpers/imgSrcMaker";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CustomLink } from "atoms/CustomLink";
export const Header = () => {
  const { isOpen, open, close } = useToggle();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (newLang) => {
    const currentLocationFunc = () => {
      if (
        location.pathname.startsWith("/uk/") ||
        location.pathname.startsWith("/ru/")
      ) {
        console.log("include");
        return location.pathname.split("/").slice(2, 4).join("/");
      }
      return "";
    };
    const currentLocation = currentLocationFunc();
    console.log(currentLocationFunc());
    navigate(`/${currentLocation ? newLang + "/" + currentLocation : newLang}`);
  };
  return (
    <header>
      <div className="header__container">
        <div className="container header__main-wrapper ">
          <MediaQuery minWidth={breakpoints.tablet}>
            <div className="header__socials-email-wrap">
              <Socials />
              <a
                href="mailto:v@fflogistics.com.ua"
                className="header_contact__link"
                aria-label="write to us by e-mail"
              >
                <svg className="header__icon-email--tablet">
                  <use href={svgHrefMaker("icon-email")}></use>
                </svg>
                v@fflogistics.com.ua
              </a>
            </div>
          </MediaQuery>
          <CustomLink
            linkClass="logo"
            to=""
            ariaLabel="go to home page"
            text={false}
          >
            <picture>
              <source
                srcSet={`${imgSrcMaker(
                  "desktop/logo-desktop.webp"
                )} 1x, ${imgSrcMaker("desktop/logo-desktop@2x.webp")} 2x`}
                media={`(min-width: ${breakpoints.desktop}px)`}
                type="image/webp"
              />

              <source
                srcSet={`${imgSrcMaker(
                  "desktop/logo-desktop.png"
                )} 1x, ${imgSrcMaker("desktop/logo-desktop@2x.png")} 2x`}
                media={`(min-width: ${breakpoints.desktop}px)`}
              />

              <source
                srcSet={`${imgSrcMaker(
                  "tablet/logo-tablet.webp"
                )} 1x, ${imgSrcMaker("tablet/logo-tablet@2x.webp")} 2x`}
                media={`(min-width: ${breakpoints.tablet}px)`}
                type="image/webp"
              />
              <source
                srcSet={`${imgSrcMaker(
                  "tablet/logo-tablet.png"
                )} 1x, ${imgSrcMaker("tablet/logo-tablet@2x.png")} 2x`}
                media={`(min-width: ${breakpoints.tablet}px)`}
              />

              <source
                srcSet={`${imgSrcMaker(
                  "mobile/logo-mobile.webp"
                )} 1x, ${imgSrcMaker("mobile/logo-mobile@2x.webp")} 2x`}
                media={`(min-width: ${breakpoints.mobile}px)`}
                type="image/webp"
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
          </CustomLink>

          <ul className="header__contacts-list">
            <li className="header__phone-mobile">
              <a href="tel:+380930569981">
                <svg
                  className="phone-icon"
                  width="17"
                  height="17"
                  viewBox="0 0 34 34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.444 15.956c0-3.457-1.208-6.389-3.623-8.797s-5.356-3.612-8.821-3.613v-3.546c2.222 0 4.304 0.421 6.245 1.264s3.63 1.98 5.067 3.413 2.577 3.117 3.422 5.053c0.845 1.936 1.267 4.011 1.266 6.226h-3.556zM21.333 15.956c0-1.477-0.519-2.733-1.556-3.767s-2.296-1.551-3.778-1.551v-3.546c2.459 0 4.556 0.865 6.29 2.594s2.6 3.819 2.599 6.271h-3.555zM30.133 32c-3.822 0-7.549-0.842-11.179-2.526s-6.845-3.93-9.644-6.737c-2.799-2.807-5.051-6.021-6.756-9.641s-2.556-7.335-2.555-11.146v-0.931c0-0.325 0.030-0.635 0.089-0.931h10.4l1.644 8.909-5.067 5.097c1.244 2.127 2.808 4.122 4.69 5.983s3.948 3.472 6.199 4.831l5.156-5.141 8.889 1.773v10.371c-0.296 0.030-0.607 0.052-0.933 0.067s-0.637 0.022-0.933 0.021z"></path>
                </svg>
              </a>
            </li>
            <li className="header__email-mobile">
              <a
                href="mailto:v@fflogistics.com.ua"
                aria-label="call our manager"
              >
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
              onClick={() => {
                i18n.changeLanguage("uk");
                localStorage.setItem("language", "uk");
                changeLanguage("uk");
              }}
              aria-label="change the language to Ukranian"
            >
              ua
            </button>
            <span className="button__btw-line">|</span>
            <button
              className={`language-btn
              ${i18n.resolvedLanguage === "ru" ? "language-btn--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("ru");
                localStorage.setItem("language", "ru");
                changeLanguage("ru");
              }}
              aria-label="change the language to russian"
            >
              ru
            </button>
          </div>
          <MediaQuery minWidth={breakpoints.tablet}>
            <a
              href="tel:+380930569981"
              className="header_contact__link"
              aria-label="call our manager"
            >
              <svg
                className="header__icon-phone--tablet"
                width="17"
                height="17"
                viewBox="0 0 34 34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.444 15.956c0-3.457-1.208-6.389-3.623-8.797s-5.356-3.612-8.821-3.613v-3.546c2.222 0 4.304 0.421 6.245 1.264s3.63 1.98 5.067 3.413 2.577 3.117 3.422 5.053c0.845 1.936 1.267 4.011 1.266 6.226h-3.556zM21.333 15.956c0-1.477-0.519-2.733-1.556-3.767s-2.296-1.551-3.778-1.551v-3.546c2.459 0 4.556 0.865 6.29 2.594s2.6 3.819 2.599 6.271h-3.555zM30.133 32c-3.822 0-7.549-0.842-11.179-2.526s-6.845-3.93-9.644-6.737c-2.799-2.807-5.051-6.021-6.756-9.641s-2.556-7.335-2.555-11.146v-0.931c0-0.325 0.030-0.635 0.089-0.931h10.4l1.644 8.909-5.067 5.097c1.244 2.127 2.808 4.122 4.69 5.983s3.948 3.472 6.199 4.831l5.156-5.141 8.889 1.773v10.371c-0.296 0.030-0.607 0.052-0.933 0.067s-0.637 0.022-0.933 0.021z"></path>
              </svg>
              +380 93 056 99 81
            </a>
          </MediaQuery>

          <button
            type="button"
            className="header__burger-menu"
            onClick={open}
            aria-label="open menu with navigation"
          >
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
