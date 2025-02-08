import React, { useState } from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import Modal from "react-modal";
import style from "./style.module.scss";

interface DescriptionModal {
  name: string;
  place: string;
  description: string;
  photo: File | null;
}

const ModalComponent = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DescriptionModal>({
    name: "",
    place: "",
    description: "",
    photo: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (file: File) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: file,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = "http://localhost/upload.php";

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("place", formData.place);
    formDataToSend.append("description", formData.description);

    if (formData.photo) {
      formDataToSend.append("photo", formData.photo);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();
      console.log("Ответ от сервера:", result);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} className={style.modal}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Информация об источнике</h1>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Наименование" required />
        <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Местоположение" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Описание" required />
        <ImageUploader onImageUpload={handleImageUpload} />
        <button type="submit">Отправить</button>
      </form>
    </Modal>
  );
};

export default ModalComponent;
