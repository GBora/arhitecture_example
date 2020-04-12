import IMessageInput from "../models/IMessageInput";
import { IMessageAPI } from "../persistence/messageAPI";
import messageAPI from "../persistence/messageAPI";
import { IMessage } from "../models/IMessage";
import userAPI from "../persistence/userAPI";
import { IUserAPI } from "../persistence/userAPI";
import UserConvertor from "../converters/userConverter";
import { bindUserToMessage } from "../transformers/messageTransformers";

export interface IMessageService {
    addMessage(message: IMessageInput): void
    getConversation(user1: string, user2: string, count: number): Promise<IMessage[]>
}

export class MessageService implements IMessageService {

    private messageAPI: IMessageAPI = new messageAPI();
    private userAPI: IUserAPI = new userAPI();

    addMessage(message: IMessageInput): void {
        try {
            this.messageAPI.saveMessage(message);
        } catch (err) {
            console.error(err);
        }
    }

    async getConversation(user1: string, user2: string, count: number): Promise<IMessage[]> {
        let rawMessages: IMessageInput[] = await this.messageAPI.getConversationMessages(user1, user2);
        console.log(rawMessages.length);

        let rawUser1: any = (await this.userAPI.searchUser(user1)).find( data => data.dataValues.EMAIL === user1);
        let fullUser1 = UserConvertor.fromDBRow(rawUser1);

        let rawUser2: any = (await this.userAPI.searchUser(user2)).find( data => data.dataValues.EMAIL === user2);
        let fullUser2 = UserConvertor.fromDBRow(rawUser2);

        let fullMessages: IMessage[] = rawMessages.map( raw => bindUserToMessage(raw, fullUser1, fullUser2));

        return Promise.resolve(fullMessages.slice(-count));
    }

}