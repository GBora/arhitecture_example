import { Sequelize, Model, TEXT } from "sequelize";
import configs from "../config/configs";

// let sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: configs.dbURL
// });

const sequelize = new Sequelize(configs.dbName, configs.dbUser, configs.dbPassword, {
  host: configs.dbHost,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

class UserModel extends Model {}

UserModel.init({
  // attributes
  EMAIL: {
    type: TEXT,
    allowNull: false,
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