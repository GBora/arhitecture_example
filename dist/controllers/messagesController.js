"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageService_1 = require("../services/messageService");
const sseService_1 = __importDefault(require("../services/sseService"));
class MessagesCtrl {
    constructor() {
        // constructor(private sseService: ISseService) {}
        this.messageService = new messageService_1.MessageService();
    }
    addMessage(data) {
        this.messageService.addMessage(data);
        this.pushMessage(data);
    }
    getConversation(data) {
        return this.messageService.getConversation(data.user1, data.user2, data.count);
    }
    pushMessage(data) {
        let connection = sseService_1.default.getUserConnection(data.to);
        let message = {
            type: 'new_msg',
            to: data.to,
            from: data.from,
            content: data.content
        };
        if (connection) {
            connection.write("data: " + JSON.stringify(message) + "\n\n");
        }
    }
}
exports.default = MessagesCtrl;
//# sourceMappingURL=messagesController.js.map