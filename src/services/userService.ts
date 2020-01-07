import IUser from "../models/IUser";
import UserConvertor from "../converters/userConverter";
import userAPI, { IUserAPI } from "../persistence/userAPI";

export interface IUserService {
    saveUser(data: any): void;
    searchUserByEmail(data: any): Promise<IUser[]>;
    addFriend(data: any): void;
}

export default class UserService implements IUserService {


    private userAPI: IUserAPI; 

    constructor() {
        this.userAPI = new userAPI();
    }

    saveUser(data: any): void {
        const user: IUser = UserConvertor.fromRawData(data);
        try {
            this.userAPI.saveUser(user);
        } catch (err) {
            console.error("Error saving user", err);
            throw new Error("Error saving user");
        }
    }

    addFriend(data: any): void {
        const email1: string = data.email1;
        const email2: string = data.email2;
        try {
            this.userAPI.addFriendship(email1, email2);
        } catch (err) {
            console.error("Error adding friendship", email1, email2);
            throw new Error("Error adding friendship");
        }
    }

    async searchUserByEmail(data: any): Promise<IUser[]> {
        try {
            let rawUsers = await this.userAPI.searchUser(data.email);
            let users: IUser[] = rawUsers.map(raw => UserConvertor.fromDBRow(raw));
            return Promise.resolve(users);
        } catch (err) {
            throw err;
        }
    }

}