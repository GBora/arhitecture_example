"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userConverter_1 = __importDefault(require("../converters/userConverter"));
const userAPI_1 = __importDefault(require("../persistence/userAPI"));
class UserService {
    constructor() {
        this.userAPI = new userAPI_1.default();
    }
    saveUser(data) {
        const user = userConverter_1.default.fromRawData(data);
        try {
            this.userAPI.saveUser(user);
        }
        catch (err) {
            console.error("Error saving user", err);
            throw new Error("Error saving user");
        }
    }
    addFriend(data) {
        const email1 = data.email1;
        const email2 = data.email2;
        try {
            this.userAPI.addFriendship(email1, email2);
        }
        catch (err) {
            console.error("Error adding friendship", email1, email2);
            throw new Error("Error adding friendship");
        }
    }
    searchUserByEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rawUsers = yield this.userAPI.searchUser(data.email);
                let users = rawUsers.map(raw => userConverter_1.default.fromDBRow(raw));
                return Promise.resolve(users);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getFriends(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email = data.email;
                let rawUsers = yield this.userAPI.getAllUsers();
                let users = rawUsers.map(raw => userConverter_1.default.fromDBRow(raw));
                let friendshipsRAW = yield this.userAPI.searchFriendship(email);
                let friends = friendshipsRAW.map((raw) => {
                    if (raw.dataValues.FRIEND1 != email) {
                        return raw.dataValues.FRIEND1;
                    }
                    else {
                        return raw.dataValues.FRIEND2;
                    }
                });
                users = users.filter((user) => friends.indexOf(user.email) !== -1);
                return Promise.resolve(users);
            }
            catch (err) {
                throw err;
            }
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email = data.email;
                let rawUser = yield this.userAPI.loginUser(email);
                if (rawUser) {
                    return Promise.resolve(userConverter_1.default.fromDBRow(rawUser));
                }
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map