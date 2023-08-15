import React, { useState } from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader.jsx";
import Modal from "react-modal";
import axios from "axios";
import style from "./style.module.scss";

// контеннт модального окна

const customModalContent = <div className={style.close__title}></div>;

const onSubmit = async (data) => {
  const { name, place, description, file } = data;
  const url = "http://localhost:8000/api/v1/users/";
  try {
    await axios
      .post(url, {
        name: name,
        place: place,
        description: description,
        file: file,
      })
      .then((res) => {
        if (res.statusCode === 201) {
          console.log("Успешно отправлено:", response.data);
        }
      })
      .catch((err) => {
        console.log("ошибка");
      });
  } catch (err) {
    console.log("ошибка", err);
  }
};

// компонент модального окна
const ModalComponent = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className={style.modal}
  >
    {customModalContent}

    <form className={style.form}>
      <h1 className={style.h1}>Информация об источнике</h1>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="name">
          Наименование:
        </label>
        <input
          className={style.label}
          type="text"
          id={style.name}
          name="name"
          required
        />
      </div>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="place">
          Местоположение:
        </label>
        <input type="text" id={style.place} name="place" required />
      </div>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="description">
          Описание:
        </label>
        <textarea id={style.description} name="description" required />
      </div>
      <div className={style.form__input}>
        <label className={style.label} htmlFor="photo">
          Фото:
        </label>
        <input
          type="file"
          capture="user" //environment
          name="photo"
          accept="image/*"
          required
        />
        <ImageUploader />
      </div>
      <div className={style.form__button}>
        <input type="submit" className={style.submit} value="Отправить" />
      </div>
    </form>

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
  </Modal>
);

export default ModalComponent;
