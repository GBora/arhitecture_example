import { Sequelize, Model, TEXT } from "sequelize";
import configs from "../config/configs";

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: configs.dbURL
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