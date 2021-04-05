import { Sequelize } from "sequelize";
import orm from "../infrastructure/db/orm/ormInterface";
import userEntity from "../domain/users/userEntity";

export default class User 
{
	orm:orm

	constructor(orm: orm) {
		this.orm = orm
	}

	create(data: Array<string>):object {
			const entity = new userEntity(data);

			if (entity.getExistError()) {
				return entity.getError();
			}

			return this.orm.create(entity);

	}
}