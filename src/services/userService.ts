import IUser from "../models/IUser";
import UserConvertor from "../converters/userConverter";
import userAPI, { IUserAPI } from "../persistence/userAPI";

export interface IUserService {
    saveUser(data: any): void;
    searchUserByEmail(data: any): Promise<IUser[]>;
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