import { Request, Response } from 'express';

import MovieRepositorySequelize from "../../infrastructure/db/repositories/movies/MovieRepositorySequelize"
import Movie from "../../applications/Movie";

export default class MovieControllers {
	private result: any = {};

	 create = async (req:Request, res:Response):Promise<void> =>{
	 	let data:Array<any> = req.body;

	 	if (req.session !== undefined) {
	 		data["user"] = req.session.user;
	 	}

	 	if (data["user"] == undefined) {
	 		res.status(403).send({message:"Debe iniciar sesión para guardar peliculas"});
	 	}

		const movieRepository = new MovieRepositorySequelize;

		const movie:Movie = new Movie(movieRepository);

		const result:any = await movie.create(data);

		res.status(result.code).send({debug:result.debug, message:result.message});
	}

	update = async (req:Request, res:Response):Promise<void> => {
		let data:Array<any> = req.body;
		data["movie_id"] = req.params.id;

	 	if (req.session !== undefined) {
	 		data["user"] = req.session.user;
	 	}

		const movieRepository = new MovieRepositorySequelize;

		const movie:Movie = new Movie(movieRepository);

		const result:any = await movie.update(data);

		res.status(result.code).send({debug:result.debug, message:result.message});
	}
}
