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
const UserModel_1 = __importDefault(require("./UserModel"));
const sequelize_1 = require("sequelize");
class userAPI {
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield UserModel_1.default.sync().then(() => {
                try {
                    return UserModel_1.default.create({
                        FIRST_NAME: user.firstName,
                        LAST_NAME: user.lastName,
                        EMAIL: user.email
                    });
                }
                catch (err) {
                    throw err;
                }
            });
        });
    }
    searchUser(email) {
        return UserModel_1.default.findAll({
            where: {
                EMAIL: {
                    [sequelize_1.Op.like]: "%" + email + "%"
                }
            }
        });
    }
}
exports.default = userAPI;
//# sourceMappingURL=userAPI.js.map