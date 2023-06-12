import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { GestionComponent } from '../gestion/gestion.component';
import { user } from 'src/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username!:string;
password!:string;
users!:user[];
existeduser:user[] = []

constructor(private router: Router , private service: UsersService){
  this.service.getUsers().subscribe(data=>{this.users = data})
}
login(){
  if(this.username == "admin" && this.password == "admin"){
    console.log("connected")
    // this.service.isAdminOn = true;
    localStorage.setItem('isAdminOn','true')
    this.service.isAdminOn =true;
    this.router.navigate(["/gestion"])
  }
  else{
    this.existeduser = this.users.filter((user)=>user.username === this.username && user.password==this.password)
    if(this.existeduser.length >0){
     this.service.isUserOn = true
     localStorage.setItem('isUserOn','true')
     localStorage.setItem('name',this.username)
     this.service.useron = this.username
     this.router.navigate(["/"])
    }
  }
}


}

