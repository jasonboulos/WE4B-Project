import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { GestionComponent } from '../gestion/gestion.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username!:string;
passwordadmin!:string;

constructor(private router: Router , private service: UsersService){

}
login(){
  if(this.username == "admin" && this.passwordadmin == "admin"){
    console.log("connected")
    this.service.isAdminOn = true;
    this.router.navigate(["/gestion"])
  }
}
}
