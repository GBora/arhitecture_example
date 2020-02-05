"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageService_1 = require("../services/messageService");
class MessagesCtrl {
    constructor() {
        this.messageService = new messageService_1.MessageService();
    }
    addMessage(data) {
        this.messageService.addMessage(data);
    }
    getConversation(data) {
        return this.messageService.getConversation(data.user1, data.user2);
    }
}
exports.default = MessagesCtrl;
//# sourceMappingURL=messagesController.js.map