"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configs_1 = __importDefault(require("../config/configs"));
// let sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: configs.dbURL
// });
const sequelize = new sequelize_1.Sequelize(configs_1.default.dbName, configs_1.default.dbUser, configs_1.default.dbPassword, {
    host: configs_1.default.dbHost,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
class MessageModel extends sequelize_1.Model {
}
MessageModel.init({
    // attributes
    CONTENT: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    SENDER: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    RECIPIENT: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'MESSAGE',
    tableName: 'MESSAGES'
});
exports.default = MessageModel;
//# sourceMappingURL=MessageModel.js.map