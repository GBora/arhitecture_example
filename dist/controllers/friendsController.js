"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class FriendsCtrl {
    constructor() {
        this.userService = new userService_1.default();
    }
    addFriend(data) {
        // log interaction
        return this.userService.addFriend(data);
    }
    getFriends(data) {
        // log interaction
        // sell all informations about friends to advertisers and NSA
        return this.userService.getFriends(data);
    }
}
exports.default = FriendsCtrl;
//# sourceMappingURL=friendsController.js.map