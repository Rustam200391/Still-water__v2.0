import React from "react";
import Modal from "react-modal";
import style from "./style.module.css";

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

    <div className={style.block}>
      <div>
        <div>
          <label for="name-sources">Наименование источника</label>
          <input
            type="text"
            name="name-sources"
            className={style.block__title}
          />
        </div>
        <div className={style.block__title__place}>
          <label htmlFor="input">Район местоположения</label>
          <input
            type="text"
            name="name-sources"
            className={style.block__title}
          />
        </div>
        <div className={style.block__title__photo}>
          <label name="Upload an Image" className={style.add__block}>
            Фото источника
          </label>
          <input
            type="file"
            //переименовать кнопку
            id="file"
            name="Upload an Image"
            placeholder="Upload an Image"
            required
            className={style.block__upload}
          />
        </div>
        <div className={style.add__block__description}>
          <label htmlFor="input">Краткое описание</label>
          <textarea id="story" name="story" rows="5" cols="13" />
        </div>
      </div>
      <div>
        <button className={style.close__button} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  </Modal>
);

export default ModalComponent;
