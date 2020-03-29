"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageAPI_1 = __importDefault(require("../persistence/messageAPI"));
const userAPI_1 = __importDefault(require("../persistence/userAPI"));
const userConverter_1 = __importDefault(require("../converters/userConverter"));
const messageTransformers_1 = require("../transformers/messageTransformers");
class MessageService {
    constructor() {
        this.messageAPI = new messageAPI_1.default();
        this.userAPI = new userAPI_1.default();
    }
    addMessage(message) {
        try {
            this.messageAPI.saveMessage(message);
        }
        catch (err) {
            console.error(err);
        }
    }
    getConversation(user1, user2, count) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawMessages = yield this.messageAPI.getConversationMessages(user1, user2);
            let rawUser1 = (yield this.userAPI.searchUser(user1)).find(data => data.dataValues.EMAIL === user1);
            let fullUser1 = userConverter_1.default.fromDBRow(rawUser1);
            let rawUser2 = (yield this.userAPI.searchUser(user2)).find(data => data.dataValues.EMAIL === user2);
            let fullUser2 = userConverter_1.default.fromDBRow(rawUser2);
            let fullMessages = rawMessages.map(raw => messageTransformers_1.bindUserToMessage(raw, fullUser1, fullUser2));
            return Promise.resolve(fullMessages.slice(-count));
        });
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=messageService.js.map