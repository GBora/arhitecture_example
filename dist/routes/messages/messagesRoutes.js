"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messagesController_1 = __importDefault(require("../../controllers/messagesController"));
const pubsub_js_1 = __importDefault(require("pubsub-js"));
const messagesRoutes = express_1.Router();
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
messagesRoutes.get("/conversation-stream", (req, res) => {
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
exports.default = messagesRoutes;
//# sourceMappingURL=messagesRoutes.js.map