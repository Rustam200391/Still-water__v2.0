import React from "react";
import Modal from "react-modal";
import style from "./style.module.scss";

// контеннт модального окна

const customModalContent = <div className={style.close__title}></div>;

// компонент модального окна
const ModalComponent = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className={style.modal}>
    {customModalContent}
    {/* <form className={style.form}>
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
    </form> */}
    <form className={style.form}>
      <h1 className={style.h1}>Информация об источнике</h1>
      <div className={style.form__input}>
        <label className={style.label} for="name">
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
        <label className={style.label} for="email">
          Местоположение:
        </label>
        <input type="text" id={style.place} name="place" required />
      </div>
      <div className={style.form__input}>
        <label className={style.label} for="description">
          Описание:
        </label>
        <textarea id={style.description} name="description" required />
      </div>
      <div className={style.form__input}>
        <label className={style.label} for="photo">
          Фото:
        </label>
        <input
          type="file"
          capture="user" //environment
          name="photo"
          // accept="image/*"
          required
        />
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
