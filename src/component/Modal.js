import React from "react";
import Modal from "react-modal";
import style from "./module.style.css";

// контеннт модального окна

const customModalContent = (
  <div className={style.close}>
    <h2>Модальное окно</h2>
    <p>Содержимое модального окна</p>
  </div>
);

// компонент модального окна
const ModalComponent = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    {customModalContent}
    <div className={style.close}>
      <button className={style.close__button} onClick={onClose}>
        X
      </button>
    </div>
  </Modal>
);

export default ModalComponent;
