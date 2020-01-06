"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// let storageLocation = 'C:\\Users\\george\\Documents\\GitHub\\architecture_example\\db\\database.db';
let storageLocation = 'database.db';
let sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: storageLocation
});
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    // attributes
    EMAIL: {
        type: sequelize_1.TEXT,
        allowNull: false,
        unique: true
    },
    FIRST_NAME: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    LAST_NAME: {
        type: sequelize_1.TEXT,
        allowNull: false
    },
    AVATAR: {
        type: sequelize_1.TEXT,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'USER',
    tableName: 'USERS',
    timestamps: false
});
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map