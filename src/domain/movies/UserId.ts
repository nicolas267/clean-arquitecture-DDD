export default class userId {
	private userId:number|null = null;

	constructor(userId:number) {
		
		this.setUserId(userId)
	}

	public getUserId() : number|null {
		return this.userId;
	}

	setUserId(userId:number){
		this.userId = userId;
	}
}