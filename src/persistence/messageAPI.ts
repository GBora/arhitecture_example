import IMessage from "../models/IMessage";
import MessageModel from "./MessageModel";


export interface IMessageAPI {
    saveMessage(message: IMessage): Promise<any>;

}

export default class messageAPI implements IMessageAPI {
    async saveMessage(message: IMessage) {
        await MessageModel.sync().then(() => {
            try {
                return MessageModel.create({
                    SENDER: message.from,
                    RECIPIENT: message.to,
                    CONTENT: message.content
                })
            } catch (err) {
                throw err;
            }
        }).catch((err) => {
            console.error(err);
        })
    }
}