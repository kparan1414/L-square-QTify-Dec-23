import styles from "./Modal.module.css";
import { useState, useRef, useEffect } from "react";
// import closeButton from "../../assets/closeBtn.png";

export default function Modal({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef(null);
  // useEff no.1 to keep the prop & state of modal in sync
  // i.e. whether the modal is open or not
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  //   useEff no.2 to open or close the modal component according to the
  // state of modal. here we use native methods of html dialog element
  // Further, the useRef hook is used to refer the dialog element.
  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) modalElement.showModal();
      else modalElement.close();
    }
  }, [isModalOpen]);

  //   Now lets handle close & keydown events
  const handleCloseModal = () => {
    if (onClose) onClose();
    setIsModalOpen(false);
  };
  //   Why are we handling "Esc" btn event ? because we need to manage the internal state
  //  to maintain the proper working of the component
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };
  //   Lets return the JSX
  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className={styles.modal}>
      {hasCloseBtn && (
        <button className={styles.closeBtn} onClick={handleCloseModal}>
          X
        </button>
      )}
      {children}
    </dialog>
  );
}
