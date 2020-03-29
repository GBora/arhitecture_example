import { MessageService, IMessageService } from "../services/messageService"
import { IMessage } from "../models/IMessage";
import SseService, { ISseService } from "../services/sseService";

export default class MessagesCtrl {

    // constructor(private sseService: ISseService) {}

    private messageService: IMessageService = new MessageService()

    addMessage(data: any) {
        this.messageService.addMessage(data);
        this.pushMessage(data);
    }

    getConversation(data: any): Promise<IMessage[]> {
        return this.messageService.getConversation(data.user1, data.user2, data.count);
    }

    pushMessage(data: any) {
        let connection = SseService.getUserConnection(data.to);
        let message = {
            type: 'new_msg',
            to: data.to,
            from: data.from,
            content: data.content
        }
        if (connection) {
            connection.write("data: " + JSON.stringify(message) + "\n\n")
        }
    }
}