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

class FriendsModel extends Model {}

FriendsModel.init({
  // attributes
  FRIEND1: {
    type: TEXT,
    allowNull: false
  },
  FRIEND2: {
    type: TEXT,
    allowNull: false
  }, 
}, {
  sequelize,
  modelName: 'FRIENDSHIP',
  tableName: 'FRIENDS',
  timestamps: false
});

export default FriendsModel;