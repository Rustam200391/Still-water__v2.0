import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// маршрут для возврата данных

app.get("/api/data", cors(), (req: Response, res: Response) => {
    const data = {
        message: "Hello from the server!"
    };
    res.json(data);
});

//запуск сервера
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
});