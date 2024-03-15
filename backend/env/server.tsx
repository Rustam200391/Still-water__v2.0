const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Создаем хранилище для загруженных файлов
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Фильтр для загрузки только изображений
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Допустимы только изображения'), false);
  }
};

// Инициализируем multer с настройками
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Принимаем POST запросы на /api/endpoint
app.post('/api/endpoint', upload.single('photo'), (req, res) => {
  const { name, place, description } = req.body;
  const photoPath = req.file ? req.file.path : null;

  // В этом примере мы просто выводим полученные данные в консоль
  console.log('Имя:', name);
  console.log('Местоположение:', place);
  console.log('Описание:', description);
  console.log('Путь к фото:', photoPath);

  // Отправляем ответ клиенту
  res.json({ message: 'Данные успешно получены и обработаны' });
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});