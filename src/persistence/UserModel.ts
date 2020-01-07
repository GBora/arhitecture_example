import { Sequelize, Model, TEXT } from "sequelize";
import configs from "../config/configs";

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: configs.dbURL
});

class UserModel extends Model {}

UserModel.init({
  // attributes
  EMAIL: {
    type: TEXT,
    allowNull: false,
    unique: true
  },
  FIRST_NAME: {
      type: TEXT,
      allowNull: false
  },
  LAST_NAME: {
    type: TEXT,
    allowNull: false
  },
  AVATAR: {
      type: TEXT,
      allowNull: true,
  }
}, {
  sequelize,
  modelName: 'USER',
  tableName: 'USERS',
  timestamps: false
});

export default UserModel;