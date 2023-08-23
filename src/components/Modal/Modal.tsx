import React, { useState } from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import Modal from "react-modal";
import axios from "axios";
import style from "./style.module.scss";


type Data = {
  name: string;
  place: string;
  description: string;
  file: any;
}
// types description



// контент модального окна
const customModalContent = <div className={style.close__title}></div>;
// компонент модального окна
const handleSubmit = (event) => {
  event.preventDefault(); // Остановит отправку формы, чтобы страница не перезагружалась
  const formData = new FormData(event.target); // Создает объект FormData из формы
  const url = "/..."; // Замените на URL вашего бэкенда

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Ответ от бэкенда:", data);
      // Обрабатывайте ответ от бэкенда здесь
    })
    .catch((error) => {
      console.error("Ошибка при отправке данных:", error);
      // Обрабатывайте ошибку здесь
    });
};
const ModalComponent = ({ isOpen, onClose }) => (
  


  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className={style.modal}
    overlayClassName={style.modalOverlay}
  >
    {customModalContent}

    <form
      className={style.form}
      action="POST"
      onSubmit={handleSubmit}
    >
      <div className={style.title}>
        <h1 className={style.h1}>Информация об источнике</h1>
        <div className={style.close} onClick={onClose}>
          <button className={style.close__button}>
            <img
              src="https://www.magicwaters.ru/webp/upload/dynamic/2017-06/05/pk-empty.png.webp"
              height={58}
              width={26}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="name">
          Наименование:
        </label>
        <input
          className={style.label}
          type="text"
          id={style.form__input}
          name="name"
          required
        />
      </div>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="place">
          Местоположение:
        </label>
        <input
          className={style.label}
          type="text"
          id={style.form__input}
          name="place"
          required
        />
      </div>
      <div className={style.form__input}>
        <label
          className={style.label}
          htmlFor=""
        >
          Описание:
        </label>
        <textarea
          id={style.form__input}
          name="description"
          required
        />
      </div>
      <div className={style.form__input}>
        <div className={style.form__input__label}>
          <label className={style.label} htmlFor="photo">
            Фото:
          </label>
        </div>
        
        <input
          type="file"
          className={style.label__input}
          capture="user" //environment
          name="photo"
          accept="image/*"
          required
          title=""
        />
        <ImageUploader />
      </div>
      <div className={style.form__button}>
        <input type="submit" className={style.submit} value="Отправить" />
      </div>
      
    </form>

    
  </Modal>
);

export default ModalComponent;
