import { Router, Request, Response, response } from "express";
import MessagesCtrl from "../../controllers/messagesController";
import { IMessage } from "../../models/IMessage";

import PubSub from "pubsub-js";
import { ISseService } from "../../services/sseService";
import SseService from "../../services/sseService";

const messagesRoutes = Router();

// const sseService: ISseService = new SseService();

// const messageCtrl: MessagesCtrl = new MessagesCtrl(sseService);
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


messagesRoutes.get("/sse", (req: Request, res: Response) => {
	req.socket.setTimeout(Number.MAX_VALUE);
	res.writeHead(200, {
		'Content-Type': 'text/event-stream', // <- Important headers
		'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'MIME-Type': 'text/event-stream'
	});
	res.write('\n');
    SseService.addUser(req.query.online, res);
    // SseService.getUserConnection(req.query.online).write("data: " + "hello " + req.query.online + "\n\n")
    req.on("close", function () {
        SseService.removeUser(req.query.online);
    }); // <- Remove this client when he disconnects
})

export default messagesRoutes;