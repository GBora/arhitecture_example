import IUser from "../models/IUser";
import UserService, { IUserService } from "../services/userService";

export default class FriendsCtrl {

    private userService: IUserService; 

    constructor() {
        this.userService = new UserService();
    }

    public addFriend(data: any): void {
        // log interaction
        return this.userService.addFriend(data);
    }

    public getFriends(data: any): Promise<IUser[]> {
        // log interaction
        // sell all informations about friends to advertisers and NSA
        return this.userService.getFriends(data);
    }
}