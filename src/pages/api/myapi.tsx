import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // получаем данные из тела запроса
        const data = req.body;
        // отправляем данные на бекенд
        res.status(200).json({ message: "Данные успешно отправлены на бекенд" });
        // отправляем сообщение об успешной отправке обратно клиенту
    } else {
        res.status(405).json({ message: "Метод не поддерживается" });
    }
}