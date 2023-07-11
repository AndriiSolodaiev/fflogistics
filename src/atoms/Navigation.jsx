import { NavLink, useNavigate } from "react-router-dom";
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
            aria-label="move to services"
          >
            {t("header.nav.services")}
          </button>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/transportation-requirements"
            className="navigation__link"
            onClick={onClose}
            aria-label="move to transportation requirements"
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
                to="/delivery-from-SthKorea"
                onClick={onClose}
                aria-label="move to delivery from SthKorea"
              >
                {t("header.countries.country1")}
              </NavLink>
            </li>
            <li className="countries__item">
              <NavLink
                className="navigation__country-link"
                to="/delivery-from-Europe"
                onClick={onClose}
                aria-label="move to delivery from Europe"
              >
                {t("header.countries.country2")}
              </NavLink>
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
          <NavLink
            to="/blog"
            className="navigation__link"
            aria-label="move to Blog"
          >
            {t("header.nav.blog")}
          </NavLink>
        </li>
        <li className="navigation-item partners--tablet-m">
          <NavLink
            to="/reviews"
            className="navigation__link"
            aria-label="move to partners section"
            onClick={onClose}
          >
            {t("header.nav.reviews")}
          </NavLink>
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
