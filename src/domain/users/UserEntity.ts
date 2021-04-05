import email from "./email";
import name from "./name";
import username from "./username";
import password from "./password";

export default class UserEntity
{
	private name:any;

	private email:any;

	private username:any;

	private password:any;

	private error:boolean = false;

	private objectError:object = {};

	constructor(data:Array<any>){
		try{
			this.email 			= new email(data["email"]);
			this.name 			= new name(data["name"]);
			this.username 		= new username(data["username"]);
			this.password 		= new password(data["password"]);
		} catch(err) {
			this.error = true;
			this.objectError = err;
		}
	}

	public getEmail = ():string => {
		return this.email.getEmail()
	}

	public getName = ():string => {
		return this.name.getName()
	}

	public getUsername = ():string => {
		return this.username.getUsername()
	}

	public getPassword = ():string => {
		return this.password.getPassword()
	}

	public getExistError = ():boolean => {
		return this.error;
	}

	public getError = ():object => {
		return this.objectError
	}
}