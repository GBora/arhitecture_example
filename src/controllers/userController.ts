import IUser from "../models/IUser";
import UserService, { IUserService } from "../services/userService";

export default class UserCtrl {

    private userService: IUserService; 

    constructor() {
        this.userService = new UserService();
    }

    public addNewUser(data: any): void {
        // log interaction
        this.userService.saveUser(data);
        // send email to user
        // other bussiness needs
    }

    public async searchUser(data: any): Promise<IUser[]> {
        // log interaction
        // do a search by name if user wants to search by name
        return this.userService.searchUserByEmail(data);
    }

    public async login(data: any): Promise<IUser> {
        // log interaction
        return this.userService.login(data);
    }
}