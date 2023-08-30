import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { svgHrefMaker } from "../helpers";
import { CustomNavLink } from "./CustomLink";

export const Navigation = ({ onClose }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { lang } = useParams();
  const handleClick = (section) => {
    if (onClose) {
      onClose();
    }
    navigate(`/${lang}`, { state: { section } });
  };
  return (
    <nav>
      <ul className="navigation-list">
        <li className="navigation-item countries-list__activator">
          <p className="navigation__link ">
            {t("header.nav.services")}
            <svg className="countries__icon">
              <use href={svgHrefMaker("icon-arrow_down")}></use>
            </svg>
          </p>
          <ul className="countries__list ">
            <li className="countries__item">
              <CustomNavLink
                linkClass="navigation__country-link"
                to="/sea-transportation"
                onClose={onClose}
                ariaLabel="move to sea transportation"
                text={t("services.card1.title")}
              />
            </li>
            <li className="countries__item">
              <CustomNavLink
                linkClass="navigation__country-link"
                to="/air-transportation"
                onClose={onClose}
                ariaLabel="move to air transportation"
                text={t("services.card2.title")}
              />
              {/* <NavLink
                className="navigation__country-link"
                to="/air-transportation"
                onClick={onClose}
                aria-label="move to delivery from Europe"
              >
                {t("services.card2.title")}
              </NavLink> */}
            </li>
            <li className="countries__item">
              <CustomNavLink
                linkClass="navigation__country-link"
                to="/rail-transportation"
                onClose={onClose}
                ariaLabel="move to rail transportation"
                text={t("services.card3.title")}
              />
              {/* <NavLink
                className="navigation__country-link"
                to="/rail-transportation"
                onClick={onClose}
                aria-label="move to delivery from Europe"
              >
                {t("services.card3.title")}
              </NavLink> */}
            </li>
          </ul>
        </li>
        <li className="navigation-item">
          <CustomNavLink
            linkClass="navigation__link"
            to="/transportation-requirements"
            onClose={onClose}
            ariaLabel="move to transportation requirements"
            text={t("header.nav.conditions")}
          />
          {/* <NavLink
            to="/transportation-requirements"
            className="navigation__link"
            onClick={onClose}
            aria-label="move to transportation requirements"
          >
            {t("header.nav.conditions")}
          </NavLink> */}
        </li>
        <li className="navigation-item countries-list__activator">
          <p className="countries__title">
            {t("header.nav.countries")}
            <svg className="countries__icon">
              <use href={svgHrefMaker("icon-arrow_down")}></use>
            </svg>
          </p>
          <ul className="countries__list">
            <li className="countries__item">
              <CustomNavLink
                linkClass="navigation__country-link"
                to="/delivery-from-SthKorea"
                onClose={onClose}
                ariaLabel="move to delivery from SthKorea"
                text={t("header.countries.country1")}
              />
              {/* <NavLink
                className="navigation__country-link"
                to="/delivery-from-SthKorea"
                onClick={onClose}
                aria-label="move to delivery from SthKorea"
              >
                {t("header.countries.country1")}
              </NavLink> */}
            </li>
            <li className="countries__item">
              <CustomNavLink
                linkClass="navigation__country-link"
                to="/delivery-from-Europe"
                onClose={onClose}
                ariaLabel="move to delivery from Europe"
                text={t("header.countries.country2")}
              />
              {/* <NavLink
                className="navigation__country-link"
                to="/delivery-from-Europe"
                onClick={onClose}
                aria-label="move to delivery from Europe"
              >
                {t("header.countries.country2")}
              </NavLink> */}
            </li>
          </ul>
        </li>

        <li className="navigation-item">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("payment")}
            aria-label="move to payment section"
          >
            {t("header.nav.payment")}
          </button>
        </li>
        <li className="navigation-item blog--desktop" onClick={onClose}>
          <CustomNavLink
            linkClass="navigation__link"
            to="/blog"
            onClose={onClose}
            ariaLabel="move to Blog"
            text={t("header.nav.blog")}
          />
          {/* <NavLink
            to="/blog"
            className="navigation__link"
            aria-label="move to Blog"
          >
            {t("header.nav.blog")}
          </NavLink> */}
        </li>
        <li className="navigation-item ">
          <CustomNavLink
            linkClass="navigation__link"
            to="/reviews"
            onClose={onClose}
            ariaLabel="move to reviews section"
            text={t("header.nav.reviews")}
          />
          {/* <NavLink
            to="/reviews"
            className="navigation__link"
            aria-label="move to partners section"
            onClick={onClose}
          >
            {t("header.nav.reviews")}
          </NavLink> */}
        </li>
        <li className="navigation-item">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("client-form")}
            aria-label="move to contacts section"
          >
            {t("header.nav.contacts")}
          </button>
        </li>
      </ul>
    </nav>
  );
};
