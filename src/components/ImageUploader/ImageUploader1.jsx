import React, { useState } from "react";

export const ImageUploader = () => {
  const [image, setImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {image && <img src={image} alt="Preview" width="200" height="200" />}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};
