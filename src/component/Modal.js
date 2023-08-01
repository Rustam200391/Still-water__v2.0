import React from "react";
import Modal from "react-modal";
import style from "./style.module.css";

// контеннт модального окна

const customModalContent = (
  <div className={style.close}>
    <h2>Модальное окно</h2>
    <p>Содержимое модального окна</p>
    <input
      type="file"
      //переименовать кнопку
      id="file"
      name="Upload an Image"
      placeholder="Upload an Image"
      required
    />
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
