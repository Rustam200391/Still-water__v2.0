import React from "react";
import Modal from "react-modal";
import style from "./style.module.scss";

// контеннт модального окна

const customModalContent = (
  <div className={style.close__title}>
    <h2>Информация об источнике</h2>
  </div>
);

// компонент модального окна
const ModalComponent = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className={style.modal}>
    {customModalContent}
    <form className={style.form}>
      <div className="question">
        <input className={style.input} type="text" required />
        <label className={style.label} htmlFor="name">
          Название
        </label>
      </div>
      <div class="question">
        <input className={style.input} type="text" required />
        <label className={style.label}>Местоположение</label>
      </div>

      <div class="question">
        <textarea required />
        <label className={style.label}>Добавить описание</label>
      </div>
      <button className={style.button}>Добавить</button>
    </form>
    <button className={style.close__button} onClick={onClose}>
      <img
        src="https://www.magicwaters.ru/webp/upload/dynamic/2017-06/05/pk-empty.png.webp"
        height={58}
        width={26}
        alt=""
      />
    </button>
  </Modal>
);

export default ModalComponent;
