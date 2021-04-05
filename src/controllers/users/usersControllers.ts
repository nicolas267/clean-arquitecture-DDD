import { Request, Response } from 'express';

import UserRepositorySequelize from "../../infrastructure/db/repositories/users/UserRepositorySequelize"
import  UserEntity from "../../domain/users/UserEntity";

export default class {
	private result = {};

	 create = async (req:Request, res:Response):Promise<void> =>{
	 	const data:Array<any> = req.body;
		const userRepository = new UserRepositorySequelize;
		const user = new UserEntity(data);

		try {
			this.result = await userRepository.create(user);
		} catch(err) {
			this.result = await err;
		}

		res.status(this.result.code).send(this.result.message)
	}
}
