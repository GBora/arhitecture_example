import IUser from "../models/IUser";
import UserConvertor from "../converters/userConverter";
import userAPI, { IUserAPI } from "../persistence/userAPI";
import UserService, { IUserService } from "../services/userService";

export default class UserCtrl {

    private userAPI: IUserAPI; 
    private userService: IUserService; 

    constructor() {
        this.userAPI = new userAPI();
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
        // do a search by name if that is the input
        return this.userService.searchUserByEmail(data);
    }
}