import { Sequelize, Model, TEXT } from "sequelize";
import configs from "../config/configs";

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: configs.dbURL
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