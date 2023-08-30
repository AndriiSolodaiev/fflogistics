import { useParams, Link, NavLink } from "react-router-dom";

export const CustomNavLink = ({ to, onClose, text, linkClass, ariaLabel }) => {
  const { lang } = useParams();
  return (
    <NavLink
      to={"/" + lang + to}
      onClick={onClose}
      className={linkClass}
      aria-label={ariaLabel}
    >
      {text}
    </NavLink>
  );
};

export const CustomLink = ({ to, text, linkClass, ariaLabel, children }) => {
  const { lang } = useParams();
  return (
    <Link to={"/" + lang + to} className={linkClass} aria-label={ariaLabel}>
      {text ? text : children}
    </Link>
  );
};
