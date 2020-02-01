import IMessage from "../models/IMessage";
import { IMessageAPI } from "../persistence/messageAPI";
import messageAPI from "../persistence/messageAPI";

export interface IMessageService {
    addMessage(message: IMessage): void
}

export class MessageService implements IMessageService {

    private messageAPI: IMessageAPI = new messageAPI();

    addMessage(message: IMessage): void {
        try {
            this.messageAPI.saveMessage(message);
        } catch (err) {
            console.error(err);
        }
    }

}