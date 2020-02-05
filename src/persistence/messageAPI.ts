import IMessageInput from "../models/IMessageInput";
import MessageModel from "./MessageModel";

import { Sequelize, QueryTypes } from "sequelize";
import configs from "../config/configs";

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: configs.dbURL
});


export interface IMessageAPI {
    saveMessage(message: IMessageInput): Promise<any>;
    getConversationMessages(user1: string, user2: string): Promise<any>
}

export default class messageAPI implements IMessageAPI {
    async saveMessage(message: IMessageInput) {
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
    async getConversationMessages(user1: string, user2: string): Promise<any> {
        const [results, metadata] = await sequelize.query(`
            SELECT * FROM MESSAGES 
            WHERE (SENDER=:user1 AND RECIPIENT=:user2)
            OR (SENDER=:user2 AND RECIPIENT=:user1)
        `, {
            replacements: { user1: user1, user2: user2 }
           });

        return Promise.resolve(results);
    }
}