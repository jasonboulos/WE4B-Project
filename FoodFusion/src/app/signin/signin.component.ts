import { Component } from '@angular/core';
import { user } from 'src/classes/user';
import { ProductserviceService } from '../productservice.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  numberofusers:number = 0;
  
  public user:user = new user(this.numberofusers+1,"", "","","")

  constructor(private service:UsersService){

  }
  public errorusername:boolean = false
  public errorpassword:boolean = false
  public accountcreated:boolean = false

  addUser(){
    
    if(this.user.username.length < 3){
      this.errorusername = true
      this.errorpassword = false
      this.accountcreated =false
    }
    else if(this.user.password != this.user.Cpassword){
      this.errorpassword = true
      this.errorusername = false
      
   

    }
   
    else{
      this.errorpassword = false
      this.errorusername =false
      this.accountcreated = true
      this.service.addUser(this.user).subscribe(data=>{this.user = data})
      
  
        

      
    }
 

  }
}
