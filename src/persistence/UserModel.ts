import { Sequelize, Model, TEXT } from "sequelize";

// let storageLocation = 'C:\\Users\\george\\Documents\\GitHub\\architecture_example\\db\\database.db';
let storageLocation = 'database.db';

let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storageLocation
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