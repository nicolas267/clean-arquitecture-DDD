import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";

const sequelize = new Sequelize("mysql://root@localhost/test");

interface UserAttributes {
  firstName: string;
  userName: string;
  password: string;
}

export default class User extends Model implements UserAttributes {
  public firstName!: string;
  public userName!: string;
  public password!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}


User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  modelName: 'User'
});