import { Sequelize } from "sequelize";
import movieRepository from "../domain/movies/contracts/movieRepository";
import movieEntity from "../domain/movies/movieEntity";

export default class movie 
{
	orm:movieRepository

	constructor(orm: movieRepository) {
		this.orm = orm
	}

	async create(data: Array<any>):Promise<object> {

	 	const required: {[key: string]: boolean} = {
	 		"title": true,
	 		"description": true,
	 		"director": true,
	 		"categories": false,
	 		"year": true,
	 	};

		const entity = new movieEntity(data, required);

		if (entity.getExistError()) {
			return entity.getError();
		}

		return await this.orm.create(entity);

	}

	async update(data: Array<any>):Promise<object> {

	 	const movie:any = this.orm.get(data["movie_id"]);

	 	if (movie.error) {
	 		return movie;
	 	}

		if (!movie.user_id == data["user"]) {
			return {
			"error": true,
			"code": 403,
			"debug":"",
			"message": "La pelicula que intenta nactualizar no es de su propiedad"
			};		
		}

		return await this.orm.update(movie);

	}
}