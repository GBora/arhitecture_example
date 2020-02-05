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
const MessageModel_1 = __importDefault(require("./MessageModel"));
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("../config/configs"));
let sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: configs_1.default.dbURL
});
class messageAPI {
    saveMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield MessageModel_1.default.sync().then(() => {
                try {
                    return MessageModel_1.default.create({
                        SENDER: message.from,
                        RECIPIENT: message.to,
                        CONTENT: message.content
                    });
                }
                catch (err) {
                    throw err;
                }
            }).catch((err) => {
                console.error(err);
            });
        });
    }
    getConversationMessages(user1, user2) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results, metadata] = yield sequelize.query(`
            SELECT * FROM MESSAGES 
            WHERE (SENDER=:user1 AND RECIPIENT=:user2)
            OR (SENDER=:user2 AND RECIPIENT=:user1)
        `, {
                replacements: { user1: user1, user2: user2 }
            });
            return Promise.resolve(results);
        });
    }
}
exports.default = messageAPI;
//# sourceMappingURL=messageAPI.js.map