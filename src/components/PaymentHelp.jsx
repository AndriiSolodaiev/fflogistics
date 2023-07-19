import { breakpoints } from "../constants/breakpoints";
import { paymenInfotCards } from "../dictionary";
import { useTranslation } from "react-i18next";
import { useToggle } from "hooks/useToggle";
import { ModalForm } from "./ModalForm";
import { BtnOpenModal } from "atoms";
import { useState } from "react";
export const PaymentHelp = () => {
  const { t } = useTranslation();
  const { isOpen, open, close } = useToggle();
  const [expandedCards, setExpandedCard] = useState([]);

  const handleClick = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCard((state) => state.filter((cardId) => cardId !== id));
      console.log("it is");
      return;
    }
    setExpandedCard((state) => [...state, id]);
    console.log("it isnot");
    return;
  };
  return (
    <>
      +
      <section className="payment-section" id="payment">
        <div className="container">
          <h2 className="payment__title">{t("payment.title")}</h2>
          <ul className="payment__list">
            {paymenInfotCards.map(
              ({
                imgMobileWebp,
                imgMobileWebp2x,
                imgTabletWebp,
                imgTabletWebp2x,
                imgDesktopWebp,
                imgDesktopWebp2x,
                imgMobile,
                imgMobile2x,
                imgTablet,
                imgTablet2x,
                imgDesktop,
                imgDesktop2x,
                alt,
                id,
              }) => (
                <li
                  key={id}
                  className={`payment__item ${
                    expandedCards.includes(id)
                      ? "payment__item--is-expanded"
                      : ""
                  }`}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <div className="payment__img-wrapper">
                    <picture>
                      <source
                        srcSet={`${imgDesktopWebp} 1x, ${imgDesktopWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.desktop}px)`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${imgDesktop} 1x, ${imgDesktop2x} 2x`}
                        media={`(min-width: ${breakpoints.desktop}px)`}
                      />
                      <source
                        srcSet={`${imgTabletWebp} 1x, ${imgTabletWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.tablet}px)`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${imgTablet} 1x, ${imgTablet2x} 2x`}
                        media={`(min-width: ${breakpoints.tablet}px)`}
                      />
                      <source
                        srcSet={`${imgMobileWebp} 1x, ${imgMobileWebp2x} 2x`}
                        media={`(min-width: ${breakpoints.mobile}px)`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`}
                        media={`(min-width: ${breakpoints.mobile}px)`}
                      />

                      <img
                        loading="lazy"
                        src={imgMobile}
                        alt={alt}
                        className="payment__img"
                      />
                    </picture>
                  </div>
                  <div className="payment__info-wrapper-static">
                    <div className="payment__card-text-wrapper">
                      <h3 className="payment__card-title">
                        {t(`payment.card${id}.title`)}
                      </h3>
                      <p className="payment__descr">
                        {t(`payment.card${id}.descr`)}
                      </p>
                      <p className="payment__period">
                        {t(`payment.card${id}.time`)}
                      </p>
                    </div>
                    <div className="payment__btn-wrapper">
                      <BtnOpenModal
                        openModal={open}
                        title={t("payment.btn-details")}
                        classBtn="payment__button-info"
                      />
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      {isOpen && <ModalForm isOpen={isOpen} onClose={close} />}
    </>
  );
};
