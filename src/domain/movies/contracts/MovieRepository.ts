export default interface MovieRepository {
	create(userEntity: Object): Promise<object>;
	get(movieEntity: any): Promise<object>{
}