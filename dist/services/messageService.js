"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageAPI_1 = __importDefault(require("../persistence/messageAPI"));
class MessageService {
    constructor() {
        this.messageAPI = new messageAPI_1.default();
    }
    addMessage(message) {
        try {
            this.messageAPI.saveMessage(message);
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=messageService.js.map