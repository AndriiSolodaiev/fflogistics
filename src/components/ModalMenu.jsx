import { Navigation } from "../atoms/Navigation";
import { Socials } from "../atoms/Socials";

import { svgHrefMaker } from "../helpers";
export const ModalMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`backdrop ${isOpen && "backdrop-is-visible"}`}>
      <div className="modal-container">
        <h2 className="modal__title">Меню</h2>
        <button className="modal__close-btn" type="button" onClick={onClose}>
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
