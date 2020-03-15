"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messagesController_1 = __importDefault(require("../../controllers/messagesController"));
const pubsub_js_1 = __importDefault(require("pubsub-js"));
const sseService_1 = __importDefault(require("../../services/sseService"));
const messagesRoutes = express_1.Router();
// const sseService: ISseService = new SseService();
// const messageCtrl: MessagesCtrl = new MessagesCtrl(sseService);
const messageCtrl = new messagesController_1.default();
messagesRoutes.post("/add-message", (req, res) => {
    messageCtrl.addMessage(req.body);
    console.log('PUB');
    pubsub_js_1.default.publish('NEW MESSAGE', 'hello world!');
    res.json({ success: true });
});
messagesRoutes.post("/get-conversation", (req, res) => {
    try {
        messageCtrl.getConversation(req.body).then((messages) => {
            res.json(messages);
        });
    }
    catch (_a) {
        res.sendStatus(500);
    }
});
messagesRoutes.get("/sse", (req, res) => {
    req.socket.setTimeout(Number.MAX_VALUE);
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'MIME-Type': 'text/event-stream'
    });
    res.write('\n');
    sseService_1.default.addUser(req.query.online, res);
    // SseService.getUserConnection(req.query.online).write("data: " + "hello " + req.query.online + "\n\n")
    req.on("close", function () {
        sseService_1.default.removeUser(req.query.online);
    }); // <- Remove this client when he disconnects
});
exports.default = messagesRoutes;
//# sourceMappingURL=messagesRoutes.js.map