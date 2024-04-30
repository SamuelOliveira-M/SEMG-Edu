interface IUser{	
	id:string
	nome: string,
	senha: string
	isAdmin:boolean
	accessToken : string
	idRefreshToken: string,
}
export default IUser