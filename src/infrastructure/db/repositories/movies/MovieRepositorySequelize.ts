import Movie from "../../orm/sequelize/models/Movie"
import MovieRepository from "../../../../domain/movies/contracts/MovieRepository";
import bcrypt from "bcrypt";


export default class MovieRepositorySequelize implements MovieRepository {
	
	async get(movieId: number): Promise<Object>{
		try{
			const movie = await Movie.findOne({where: {id: movieId}});

			if (!movie) {
				return {
					"error": true,
					"code": 400,
					"message": "No se encontró la pelicula a actualizar"
				};
			}

			return movie;

		} catch(err) {
			return {
				"error": true,
				"code": 500,
				"debug":err,
				"message": "Error en el servidor"
			};		
		}
	}
	
	async create(movieEntity: any): Promise<object>{
		try{
			const movie = await Movie.create({ title: movieEntity.getTitle(), description: movieEntity.getDescription(), director: movieEntity.getDirector(), year: movieEntity.getYear(), user_id: movieEntity.getUserId()});

			return {
				"error": false,
				"code": 201,
				"debug":null,
				"message": "Se ha guardado la pelicula satisfactoriamente"
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
	
	async update(movieEntity: any): Promise<object>{
		try{
			const movie = await Movie.create({ title: movieEntity.getTitle(), description: movieEntity.getDescription(), director: movieEntity.getDirector(), year: movieEntity.getYear(), user_id: movieEntity.getUserId()});

			return {
				"error": false,
				"code": 201,
				"debug":null,
				"message": "Se ha guardado la pelicula satisfactoriamente"
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