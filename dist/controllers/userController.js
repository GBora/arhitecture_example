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
const userService_1 = __importDefault(require("../services/userService"));
class UserCtrl {
    constructor() {
        this.userService = new userService_1.default();
    }
    addNewUser(data) {
        // log interaction
        this.userService.saveUser(data);
        // send email to user
        // other bussiness needs
    }
    searchUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // log interaction
            // do a search by name if user wants to search by name
            return this.userService.searchUserByEmail(data);
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // log interaction
            return this.userService.login(data);
        });
    }
}
exports.default = UserCtrl;
//# sourceMappingURL=userController.js.map