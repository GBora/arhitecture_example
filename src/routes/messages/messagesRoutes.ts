import { Router, Request, Response } from "express";
import MessagesCtrl from "../../controllers/messagesController";
import { IMessage } from "../../models/IMessage";

const messagesRoutes = Router();

const messageCtrl: MessagesCtrl = new MessagesCtrl();

messagesRoutes.post("/add-message", (req: Request, res: Response) => {
    messageCtrl.addMessage(req.body);
    res.json({success: true});
});

messagesRoutes.post("/get-conversation", (req: Request, res: Response) => {
    try {
        messageCtrl.getConversation(req.body).then((messages: IMessage[]) => {
            res.json(messages);
        })
    } catch {
        res.sendStatus(500);
    }
});

export default messagesRoutes;