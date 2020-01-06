import IUser from "../models/IUser";
import UserModel from "./UserModel";
import { Op } from "sequelize";

export interface IUserAPI {
    saveUser(user: IUser): Promise<any>;
    searchUser(email: string): Promise<any[]>;
}

export default class userAPI implements IUserAPI {

    async saveUser(user: IUser) {
        await UserModel.sync().then(() => {
            try {
                return UserModel.create({
                    FIRST_NAME: user.firstName,
                    LAST_NAME: user.lastName,
                    EMAIL: user.email
                })
            } catch (err) {
                throw err;
            }
        })
    }

    searchUser(email: string) {
        return UserModel.findAll({
            where: {
                EMAIL: {
                    [Op.like]: "%" + email + "%"
                }
            }
        })
    }
}