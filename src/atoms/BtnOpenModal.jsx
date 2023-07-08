import { useTranslation } from "react-i18next";
export const BtnOpenModal = ({ openModal }) => {
  const { t } = useTranslation();

  return (
    <div className="hero__button-wrap">
      <button
        type="button"
        className=" hero__button"
        onClick={openModal}
        aria-label="open connection form"
      >
        {t("hero.button")}
      </button>
    </div>
  );
};
