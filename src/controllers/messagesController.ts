import { MessageService, IMessageService } from "../services/messageService"
import IMessage from "../models/IMessage";

export default class MessagesCtrl {

    private messageService: IMessageService = new MessageService()

    addMessage(data: any) {
        this.messageService.addMessage(data);
    }

    getConversation(data: any): Promise<IMessage[]> {
        return Promise.resolve([]);
    }
}