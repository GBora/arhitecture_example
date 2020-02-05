import IUser from "../models/IUser";
import { IMessage } from "../models/IMessage";

//TODO be more carefull about the interfaces
export const bindUserToMessage = (message: any, user1: IUser, user2: IUser) => {
    
    let receipient = message.RECIPIENT == user1.email ? user1 : user2;
    let sender = message.SENDER == user1.email ? user1 : user2;

    let fullMessage: IMessage = {
        content: message.CONTENT,
        receipient: receipient,
        sender: sender
    };

    return fullMessage;
}