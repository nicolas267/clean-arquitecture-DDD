export default class Password {
	private password:string|null = null;

	constructor(password:string) {
		this.setPassword(password)
	}

	public getPassword() : string|null {
		return this.password;
	}

	setPassword(password:string){
		const validated = this.validate(password);

		if (!validated) {
			throw {
				"error": true,
				"code": 400,
				"message": "La contraseña debe tener minimo 6 caracteres"
			};
		} 

		this.password = password;
	}

	validate(password:string){
		if (password && password.length >= 6) {
			return true;
		}

		return false;
	}
}