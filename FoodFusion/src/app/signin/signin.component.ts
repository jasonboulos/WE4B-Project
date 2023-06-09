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
  
  user:user = new user(0,"","","","")


  constructor(private service:UsersService){

  }
  public errorusername:boolean = false
  public errorpassword:boolean = false
  public accountcreated:boolean = false

  signIn(){
    
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
      // this.service.addUser(this.user).subscribe(data=>{this.user = data})
      // this.service.getNumberOfUsers().subscribe((count)=>{
      //   // console.log(count)
      //   this.user.id = count +1;
      //   console.log(this.user.id)
       this.service.addUser(this.user).subscribe(data=>{
           this.user = data
           console.log(data)
         })
        // })
      // this.service.registerUser(this.user).subscribe((response)=>{
      //   console.log("signin", response);
      //   this.user = new user(0,"","","","")
      // },(error)=>{console.log("error", error)})
   
      
  
        

      
    }
 

  }

  
}
