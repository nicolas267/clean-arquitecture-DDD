import Title from "./Title";
import Description from "./Descripcion";
import Director from "./Director";
import Categories from "./Categories";
import Year from "./Year";
import UserId from "./UserId";

export default class MovieEntity
{
	private title:any;

	private description:any;

	private director:any;

	private categories:any;

	private year:any;

	private userId:any;

	private error:boolean = false;

	private objectError:object = {};

	constructor(data:Array<any>, required: {[key: string]: boolean}){
		try{
			this.title 				= new Title(data["title"], required.title);
			this.description 		= new Description(data["description"], required.description);
			this.director 			= new Director(data["director"], required.director);
			this.categories 		= new Categories(data["categories"], required.categories);
			this.year 				= new Year(data["year"], required.year);
			this.userId 			= new UserId(data["user"].id);
		} catch(err) {
			this.error = true;
			this.objectError = err;
		}
	}

	public getTitle = ():string => {
		return this.title.getTitle();
	}

	public getDirector = ():string => {
		return this.director.getDirector();
	}

	public getDescription = ():string => {
		return this.description.getDescription();
	}

	public getCategories = ():string => {
		return this.categories.getCategories();
	}

	public getYear = ():number => {
		return this.year.getYear();
	}

	public getUserId = ():number => {
		return this.userId.getUserId();
	}

	public getExistError = ():boolean => {
		return this.error;
	}

	public getError = ():object => {
		return this.objectError
	}
}