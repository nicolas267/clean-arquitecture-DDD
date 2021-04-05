import orm from "../../orm/ormInterface"
import User from "../../orm/sequelize/models/user"
import userEntity from "../../../../domain/users/userEntity";

export default class UserRepositorySequelize implements orm {
	
	async create(userEntity: userEntity): Promise<object>{
		try{
			
			const user = await User.create({ name: userEntity.getName(), username: userEntity.getUsername(), email: userEntity.getEmail(), password: userEntity.getPassword() });

			return {
				"error": false,
				"code": 201,
				"message": "Se ha creado el usuario satisfactoriamente"
			};

		} catch(err) {
			return {
				"error": true,
				"code": 500,
				"debug":err,
				"message": "Error en el servidor"
			};		
		}
	}
}