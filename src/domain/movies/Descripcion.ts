export default class Description {
	private description:string|null = null;

	constructor(description:string, required:boolean) {
		if (!required) {
			return;
		}
		
		this.setDescription(description)
	}

	public getDescription() : string|null {
		return this.description;
	}

	setDescription(description:string){
		const validated = this.validate(description);


		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El descripción no debe tener caracteres especiales"
			};
		} 

		this.description = description;
	}

	validate(data:string){
		let regex = /^\w+( \w+)*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}