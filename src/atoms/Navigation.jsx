import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToggle } from "../hooks/useToggle";
import { svgHrefMaker } from "../helpers";

export const Navigation = ({ onClose }) => {
  const { t } = useTranslation();
  const { toggle, isOpen } = useToggle();
  const navigate = useNavigate();

  const handleClick = (section) => {
    if (onClose) {
      onClose();
    }
    navigate("/", { state: { section } });
  };
  return (
    <nav>
      <ul className="navigation-list">
        <li className="navigation-item">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("services")}
          >
            {t("header.nav.services")}
          </button>
        </li>
        <li className="navigation-item">
          <NavLink
            className="navigation__link"
            to="/transportation-requirements"
            onClick={onClose}
          >
            {t("header.nav.conditions")}
          </NavLink>
        </li>
        <li className="navigation-item" onClick={toggle}>
          <p className="countries__title">
            {t("header.nav.countries")}
            <svg className="countries__icon">
              <use href={svgHrefMaker("icon-arrow_down")}></use>
            </svg>
          </p>

          <ul
            className={`countries__list ${
              isOpen ? "countries__list-is-expanded" : ""
            } `}
          >
            <li className="countries__item">
              <NavLink
                className="navigation__country-link"
                to="13"
                onClick={onClose}
              >
                {t("header.countries.country1")}
              </NavLink>
            </li>
            <li className="countries__item">
              <NavLink
                className="navigation__country-link"
                to="13"
                onClick={onClose}
              >
                {t("header.countries.country2")}
              </NavLink>
            </li>
            <li className="countries__item">
              <NavLink
                className="navigation__country-link"
                to="13"
                onClick={onClose}
              >
                {t("header.countries.country3")}
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="navigation-item">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("payment")}
          >
            {t("header.nav.payment")}
          </button>
        </li>
        <li className="navigation-item blog--desktop" onClick={onClose}>
          <a href="#blog" className="navigation__link">
            {t("header.nav.blog")}
          </a>
        </li>
        <li className="navigation-item partners--tablet-m">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("partners")}
          >
            {t("header.nav.partners")}
          </button>
        </li>
        <li className="navigation-item">
          <button
            type="button"
            className="navigation__link"
            onClick={() => handleClick("partners")}
          >
            {t("header.nav.contacts")}
          </button>
        </li>
      </ul>
    </nav>
  );
};