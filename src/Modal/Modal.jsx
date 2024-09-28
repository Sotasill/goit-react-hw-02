import css from "./Modal.module.css";

const Modal = ({ onCloseModal, onReset }) => {
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={onBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onCloseModal} className={css.closeBtn} type="button">
          ❌
        </button>
        <div className={css.resetSection}>
          <h2>Are you sure you want to reset?</h2>
          <p>By resetting, all feedback counts will be set to zero.</p>
         
          <button onClick={onReset} className={css.resetButton} type="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
