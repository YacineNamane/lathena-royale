import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import "./CreationModal.css";

function CreationModal({ creation, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      previousActiveElement?.focus?.();
    };
  }, [onClose]);

  if (!creation) return null;

  return createPortal(
    <motion.div
      className="creation-modal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="creation-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="creation-modal-title"
        aria-describedby="creation-modal-description"
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.98,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="creation-modal__close"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          <span></span>
          <span></span>
        </button>

        <div className="creation-modal__image">
          <img src={creation.coverImage} alt={creation.name} />

          <span className="creation-modal__image-label">L'Athéna Royale</span>
        </div>

        <div className="creation-modal__details">
          <span className="creation-modal__eyebrow">{creation.category}</span>

          <h2 id="creation-modal-title">{creation.name}</h2>

          <span className="creation-modal__line"></span>

          <p id="creation-modal-description">{creation.description}</p>

          <div className="creation-modal__footer">
            <span>{creation.season}</span>

            <span className="creation-modal__signature">L'Athena Royal</span>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

export default CreationModal;
