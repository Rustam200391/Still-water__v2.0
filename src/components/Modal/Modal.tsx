import React, { useState } from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import Modal from "react-modal";
import style from "./style.module.scss";


// types description
interface DescriptionModal {
  name: string;
  place: string;
  description: string;
  photo: File | null;
}

// контент модального окна
const customModalContent = <div className={style.close__title}></div>;

// компонент модального окна
const ModalComponent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DescriptionModal>({
    name: '',
    place: '',
    description: '',
    photo: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  setFormData(prevState => ({
    ...prevState,
    photo: file || null,
  }));
};

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const url = "/api/endpoint";

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('place', formData.place);
  formDataToSend.append('description', formData.description);
  
  // Проверяем, есть ли файл
  if (formData.photo) {
    formDataToSend.append('photo', formData.photo);
    console.log('Файл добавлен:', formData.photo.name);
  } else {
    console.log('Файл не был добавлен.');
  }

  fetch(url, {
    method: "POST",
    body: formDataToSend,
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


  return (
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.form__input}>
          <label
            className={style.label}
            htmlFor="description"
          >
            Описание:
          </label>
          <textarea
            id={style.form__input}
            name="description"
            value={formData.description}
            onChange={handleChange}
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
            onChange={handleFileChange}
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
};

export default ModalComponent;
