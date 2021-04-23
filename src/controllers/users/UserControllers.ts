import { Request, Response } from 'express';

import UserRepositorySequelize from "../../infrastructure/db/repositories/users/UserRepositorySequelize"
import  User from "../../applications/User";

export default class UserControllers {
	private result: any = {};

	 create = async (req:Request, res:Response):Promise<void> =>{
	 	const data:Array<any> = req.body;

		const userRepository = new UserRepositorySequelize;

		const user:User = new User(userRepository);

		const result:any = await user.create(data);

		res.status(result.code).send({debug:result.debug, message:result.message})
	}

	 login = async (req:Request, res:Response):Promise<void> =>{
	 	const data:Array<any> = req.body;

		const userRepository = new UserRepositorySequelize;

		const user:User = new User(userRepository);

		const result:any = await user.login(data);

		if (result.code === 200) {
			if (req.session !== undefined) {
				req.session.user = result.user;
			}
		}

		res.status(result.code).send({debug:result.debug, message:result.message})
	}
}
