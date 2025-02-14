import { useState } from "react";

export const ImageUploader = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    onImageUpload(file); // Передаем файл в родительский компонент
  };

  return (
    <div>
      {imagePreview && <img src={imagePreview} alt="Preview" width="200" />}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};
