import { Navigation } from "../atoms/Navigation";
import { Socials } from "../atoms/Socials";

import { svgHrefMaker } from "../helpers";
export const ModalMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`backdrop ${isOpen && "backdrop-is-visible"}`}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-container">
        <h2 className="modal__title">Меню</h2>
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
          aria-label="close the menu with navigation"
        >
          <svg className="modal__icon-close">
            <use href={svgHrefMaker("icon-cross")}></use>
          </svg>
        </button>
        <Navigation onClose={onClose} />
        <Socials />
      </div>
    </div>
  );
};
