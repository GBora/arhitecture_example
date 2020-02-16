import { Router, Request, Response, response } from "express";
import MessagesCtrl from "../../controllers/messagesController";
import { IMessage } from "../../models/IMessage";

import PubSub from "pubsub-js";

const messagesRoutes = Router();

const messageCtrl: MessagesCtrl = new MessagesCtrl();

messagesRoutes.post("/add-message", (req: Request, res: Response) => {
    messageCtrl.addMessage(req.body);
    console.log('PUB');
    PubSub.publish('NEW MESSAGE', 'hello world!');
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

messagesRoutes.get("/conversation-stream", (req: Request, res: Response) => {

    // res.status(200).set({
    //     "Content-Type": "text/event-stream",
    //     "Connection": "keep-alive",
    //     "Cache-Control": "no-cache"
    // })

    // var token = PubSub.subscribe('NEW MESSAGE', () => {
    //     console.log('SUB')
    //     res.write('bla bla');
    // });

});

export default messagesRoutes;