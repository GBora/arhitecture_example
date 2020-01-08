import IUser from "../models/IUser";
import UserModel from "./UserModel";
import { Op } from "sequelize";
import FriendsModel from "./FriendsModel";

export interface IUserAPI {
    saveUser(user: IUser): Promise<any>;
    searchUser(email: string): Promise<any[]>;
    addFriendship(person1: string, person2: string): Promise<any>;
    searchFriendship(email1: string, email2: string): Promise<any>;
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

    async addFriendship(person1: string, person2: string): Promise<any> {
        await FriendsModel.sync().then(() => {
            try {
                return FriendsModel.create({
                  FRIEND1: person1,
                  FRIEND2: person2
                })
            } catch (err) {
                throw err;
            }
        })
    }

    searchFriendship(email: string) {
        return FriendsModel.findAll({
            where: {
                EMAIL: {
                    [Op.like]: "%" + email + "%"
                }
            }
        })
    }
}