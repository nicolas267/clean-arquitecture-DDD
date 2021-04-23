export default class Director {
	private director:string|null = null;

	constructor(director:string, required:boolean) {
		if (!required) {
			return;
		}
		
		this.setDirector(director)
	}

	public getDirector() : string|null {
		return this.director;
	}

	setDirector(director:string){
		const validated = this.validate(director);

		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El nombre del director no debe tener caracteres especiales"
			};
		} 

		this.director = director;
	}

	validate(data:string){
		let regex = /^\w+( \w+)*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}