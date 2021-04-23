

export default class Title {
	private title:string|null = null;

	constructor(title:string, required:boolean) {
		if (!required) {
			return;
		}
		
		this.setTitle(title)
	}

	public getTitle() : string|null {
		return this.title;
	}

	setTitle(title:string){
		const validated = this.validate(title);


		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El titulo no debe tener caracteres especiales"
			};
		} 

		this.title = title;
	}

	validate(data:string){
		let regex = /^\w+( \w+)*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}