interface ISession{	
	id:string
	nome: String,
	senha: string
	isAdmin:boolean
	token: string
	idRefreshToken: string,

}
export default ISession