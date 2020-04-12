import IMessageInput from "../models/IMessageInput";
import MessageModel from "./MessageModel";

import { Sequelize, QueryTypes, Op } from "sequelize";
import configs from "../config/configs";

// let sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: configs.dbURL
// });

const sequelize = new Sequelize(configs.dbName, configs.dbUser, configs.dbPassword, {
    host: configs.dbHost,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
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
    getConversationMessages(user1: string, user2: string): Promise<any> {
        return MessageModel.findAll({
            where: {
                [Op.or]:  [{SENDER: user1, RECIPIENT: user2}, {SENDER: user2, RECIPIENT: user1}]
            }
        })
    }
}