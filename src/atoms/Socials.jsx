import { socialsRefs } from "../dictionary";

export const Socials = () => {
  return (
    <ul className="socials__container">
      {socialsRefs.map(({ ref, hrefIcon, id }) => (
        <li key={id}>
          <a
            href={ref}
            className="socials__link"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="to social link"
          >
            <svg className="socials__icon">
              <use href={hrefIcon}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
