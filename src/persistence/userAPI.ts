import IUser from "../models/IUser";
import UserModel from "./UserModel";
import { Op } from "sequelize";
import FriendsModel from "./FriendsModel";

export interface IUserAPI {
    saveUser(user: IUser): Promise<any>;
    searchUser(email: string): Promise<any[]>;
    addFriendship(person1: string, person2: string): Promise<any>;
    searchFriendship(email: string): Promise<any>;
    getAllUsers(): Promise<any[]>;
    loginUser(email: string): Promise<any>
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

    loginUser(email: string) {
        return UserModel.findOne({
            where: {
                EMAIL: {
                    [Op.is]: email
                }
            }
        })
    }

    getAllUsers(): Promise<any[]> {
        return UserModel.findAll();
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

    searchFriendship(email: string): Promise<any> {
        return FriendsModel.findAll({
            where: {
                [Op.or]:  [{FRIEND1: email}, {FRIEND2: email}]
            }
        })
    }
}