import userEntity from "../../../domain/users/userEntity";

export default interface orm {
	create(userEntity: userEntity): Promise<object>;
	
}