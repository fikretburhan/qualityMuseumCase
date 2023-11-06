export interface IAuthCredentials{
user:ILogin
loggedIn:boolean
}

export interface ILogin{
    username:string
    password:string
}