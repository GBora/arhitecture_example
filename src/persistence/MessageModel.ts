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

class MessageModel extends Model {}

MessageModel.init({
  // attributes
  CONTENT: {
    type: TEXT,
    allowNull: false
  },
  SENDER: {
    type: TEXT,
    allowNull: false
  },
  RECIPIENT: {
    type: TEXT,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'MESSAGE',
  tableName: 'MESSAGES'
});

export default MessageModel;