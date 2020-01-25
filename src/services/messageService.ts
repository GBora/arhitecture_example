import IMessage from "../models/IMessage";

export interface IMessageService {
    addMessage(message: IMessage): void
}

export class MessageService implements IMessageService {

    addMessage(message: IMessage): void {
        console.log("the message", message);
    }

}