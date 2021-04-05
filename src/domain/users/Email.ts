

export default class Email {
	private email:string|null = null;

	constructor(email:string) {
		this.setEmail(email)
	}

	public getEmail() : string|null {
		return this.email;
	}

	setEmail(email:string){
		const validated = this.validate(email);

		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El usuario debe ser solo alfanúmerico"
			};
		} 

		this.email = email;
	}

	validate(data:string){
		let regex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
		
		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}