"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("../config/configs"));
let sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: configs_1.default.dbURL
});
class FriendsModel extends sequelize_1.Model {
}
FriendsModel.init({
    // attributes
    FRIEND1: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    FRIEND2: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'FRIENDSHIP',
    tableName: 'FRIENDS',
    timestamps: false
});
exports.default = FriendsModel;
//# sourceMappingURL=FriendsModel.js.map