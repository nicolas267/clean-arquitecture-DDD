export default class Categories {
	private categories:Array<string> = [];

	public constructor(data:string, required:boolean) {
		if (!required) {
			return;
		}
		
		const categories:Array<string> = data.split(",");

		categories.map((category) => {
			this.addCategories(category);
		})
	}

	public getCategories() : Array<string>|null {
		return this.categories;
	}

	private addCategories(category:string){
		const validated = this.validate(category);


		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El nombre no debe tener caracteres especiales"
			};
		} 

		this.categories.push(category);
	}

	private validate(data:string){
		let regex = /^\w+( \w+)*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}