export default interface UserRepository {
	create(userEntity: Object): Promise<object>;
	login(userEntity: Object): Promise<object>;
}