export const BtnOpenModal = ({ openModal, title, classBtn }) => {
  return (
    <div className="hero__button-wrap">
      <button
        type="button"
        className={classBtn}
        onClick={openModal}
        aria-label="open connection form"
      >
        {title}
      </button>
    </div>
  );
};
