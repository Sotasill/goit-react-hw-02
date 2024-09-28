import { useEffect, useState } from "react";
import css from "./Modal.module.css";

const Modal = ({ onCloseModal, onReset }) => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

 
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        if (isSecondModalOpen) {
          setIsSecondModalOpen(false);
        } else {
          onCloseModal();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onCloseModal, isSecondModalOpen]);

  
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      if (isSecondModalOpen) {
        setIsSecondModalOpen(false);
      } else {
        onCloseModal();
      }
    }
  };

 
  const handleSecondModalOpen = () => {
    setIsSecondModalOpen(true);
  };

  
  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
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
          <button
            onClick={handleSecondModalOpen}
            className={css.resetButton}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      {isSecondModalOpen && (
        <div onClick={onBackdropClick} className={css.backdrop}>
          <div className={css.modal}>
            <button
              onClick={handleSecondModalClose}
              className={css.closeBtn}
              type="button"
            >
              ❌
            </button>

            <div className={css.resetSection}>
              <h2>Confirm Reset Again</h2>
              <p>This action cannot be undone. Are you sure?</p>
              <button
                onClick={onReset}
                className={css.resetButton}
                type="button"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
