import { Router, Request, Response } from "express";
import MessagesCtrl from "../../controllers/messagesController";

const messagesRoutes = Router();

const messageCtrl: MessagesCtrl = new MessagesCtrl();

messagesRoutes.post("/add-message", (req: Request, res: Response) => {
    messageCtrl.addMessage(req.body);
    res.sendStatus(200);
});

messagesRoutes.post("/get-conversation", (req: Request, res: Response) => {
    messageCtrl.addMessage(req.body);
    res.sendStatus(200);
});

export default messagesRoutes;