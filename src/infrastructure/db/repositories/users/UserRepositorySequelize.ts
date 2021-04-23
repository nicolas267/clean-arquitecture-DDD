import User from "../../orm/sequelize/models/user"
import UserRepository from "../../../../domain/users/contracts/UserRepository";
import bcrypt from "bcrypt";


export default class UserRepositorySequelize implements UserRepository {
	
	async create(userEntity: any): Promise<object>{
		try{
			const hash = bcrypt.hashSync(userEntity.getPassword(), 10);

			const user = await User.create({ name: userEntity.getName(), username: userEntity.getUsername(), email: userEntity.getEmail(), password: hash });

			return {
				"error": false,
				"code": 201,
				"debug":null,
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
	
	async login(userEntity: any): Promise<object>{
		try{

			const email = userEntity.getEmail();
			const password = userEntity.getPassword();
			
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return {
					"error": false,
					"code": 400,
					"message": "No se ha encontrado el usuario, intente nuevamente",
					"debug":""
				};
			}

			if (!bcrypt.compareSync(password, user.password)) {
				return {
					"error": false,
					"code": 400,
					"message": "contraseña incorrecta",
					"debug":""
				};
		    }

			return {
				"error": false,
				"code": 200,
				"message": "Se ha logueado satisfactoriamente",
				"user":user,
				"debug":""
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