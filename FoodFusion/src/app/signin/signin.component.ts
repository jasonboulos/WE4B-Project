import { Component } from '@angular/core';
import { user } from 'src/classes/user';
import { ProductserviceService } from '../productservice.service';
import { UsersService } from '../users.service';
import { count } from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  numberofusers:number = 0;
  
  user:user = new user(0,"","","",0,0)
  test:user =  new user(0,"","","",0,0)
  Userarray!:user[] 
  constructor(private service:UsersService){

  }
  public errorusername:boolean = false
  public usernameexist:boolean = false
  public errorpassword:boolean = false
  public accountcreated:boolean = false


 

signIn() {
  console.log(this.user.username);
  this.service.getUsers().subscribe((data: user[]) => {
    this.Userarray = data.filter(user => user.username === this.user.username);

    if (this.user.username.length < 3) {
      this.errorusername = true;
      this.errorpassword = false;
      this.accountcreated = false;
    } else if (this.user.password !== this.user.Cpassword) {
      this.errorpassword = true;
      this.errorusername = false;
      this.accountcreated = false;
    } else if (this.Userarray.length > 0) {
      this.usernameexist = true;
      this.errorpassword = false;
      this.errorusername = false;
      this.accountcreated = false;
    } else {
      this.errorpassword = false;
      this.usernameexist = false;
      this.errorusername = false;
      this.accountcreated = true;
      
      this.service.getNumberOfUsers().subscribe((count) => {
        this.user.id = count + 1;
      });
      
      this.service.addUser(this.user).subscribe(data => {
        this.user = data;
      });
    }
  });
}

  
}
