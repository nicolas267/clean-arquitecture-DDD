

export default class name {
	private name:string|null = null;

	constructor(name:string, required:boolean) {
		if (!required) {
			return;
		}

		this.setName(name)
	}

	public getName() : string|null {
		return this.name;
	}

	setName(name:string){
		const validated = this.validate(name);


		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El nombre no debe tener caracteres especiales"
			};
		} 

		this.name = name;
	}

	validate(data:string){
		let regex = /^\w+( \w+)*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}