import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
} from "sequelize";
import User from "./User"

const sequelize = new Sequelize("mysql://root@localhost/test");

interface MovieAttributes {
  title: string;
  description: string;
  director: string;
  year: number;
  user_id: number;
}

export default class Movie extends Model implements MovieAttributes {
  public title!: string;
  public description!: string;
  public director!: string;
  public year!: number;
  public user_id!: number;


  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}


Movie.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
}, {
  sequelize, 
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  modelName: 'movie'
});