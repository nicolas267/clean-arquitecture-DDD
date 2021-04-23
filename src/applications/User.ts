import { Sequelize } from "sequelize";
import UserRepository from "../domain/users/contracts/UserRepository";
import userEntity from "../domain/users/userEntity";

export default class User 
{
	orm:UserRepository

	constructor(orm: UserRepository) {
		this.orm = orm
	}

	async create(data: Array<string>):Promise<object> {

	 	const required: {[key: string]: boolean} = {
	 		"email": true,
	 		"name": true,
	 		"username": true,
	 		"password": true,
	 	};

		const entity = new userEntity(data, required);

		if (entity.getExistError()) {
			return entity.getError();
		}

		return await this.orm.create(entity);

	}

	async login(data: Array<string>):Promise<object> {

	 	const required: {[key: string]: boolean} = {
	 		"email": true,
	 		"name": false,
	 		"username": false,
	 		"password": true,
	 	};

		const entity = new userEntity(data, required);

		if (entity.getExistError()) {
			return entity.getError();
		}

		return await this.orm.login(entity);

	}
}