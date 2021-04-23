export default class Year {
	private year:string|null = null;

	constructor(year:string, required:boolean) {
		if (!required) {
			return;
		}
		
		this.setYear(year)
	}

	public getYear() : string|null {
		return this.year;
	}

	setYear(year:string){
		const validated = this.validate(year);


		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El año debe ser numeral"
			};
		} 

		this.year = year;
	}

	validate(data:string){
		let regex = /^[0-9]*$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}