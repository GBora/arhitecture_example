import { MessageService, IMessageService } from "../services/messageService"

export default class MessagesCtrl {

    private messageService: IMessageService = new MessageService()

    addMessage(data: any) {
        this.messageService.addMessage(data);
    }
}