export class user{
    id:number
    username:string
    email:string
    password:string
    Cpassword!:string
    points:number
    commandes:number
    constructor(id:number,username:string,email:string,password:string,points:number,commandes:number){
        this.id = id
        this.username = username;
        this.email = email
        this.password = password
        this.commandes = commandes
        this.points = points
    }

}