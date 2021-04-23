

export default class username {
	private username:string|null = null;

	constructor(username:string, required:boolean) {
		if (!required) {
			return;
		}

		this.setUsername(username)
	}

	public getUsername() : string|null {
		return this.username;
	}

	setUsername(username:string){
		const validated = this.validate(username);

		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "El usuario no debe tener caracteres especiales"
			};
		} 

		this.username = username;
	}

	validate(data:string){
		let regex = /^\w+$/;

		if (data && data.length > 0 && regex.test(data)) {
			return true;
		}

		return false;
	}
}