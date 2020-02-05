"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO be more carefull about the interfaces
exports.bindUserToMessage = (message, user1, user2) => {
    let receipient = message.RECIPIENT == user1.email ? user1 : user2;
    let sender = message.SENDER == user1.email ? user1 : user2;
    let fullMessage = {
        content: message.CONTENT,
        receipient: receipient,
        sender: sender
    };
    return fullMessage;
};
//# sourceMappingURL=messageTransformers.js.map