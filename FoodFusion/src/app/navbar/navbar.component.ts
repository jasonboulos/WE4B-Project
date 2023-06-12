import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedMenuItem: string = '';
   nbselecteditems:number = 0;
   public isAdminOn!:boolean
   public isUserOn!:boolean 
   public username !:string 
  constructor(private service: ProductserviceService, public userservice:UsersService, private router: Router){
   const storedLoginStatus =  localStorage.getItem('isUserOn') 
   const storedAdminStatus = localStorage.getItem('isAdminOn')
   this.isAdminOn = !!storedAdminStatus
   
   this.isUserOn = !!storedLoginStatus
   
   this.username = localStorage.getItem('name')??''
   

    
    
  }
  getSelectedItemsNumber():number{
    return this.service.nbSelectedItems()
  }
  logout(){
    
    localStorage.removeItem('isAdminOn')
    this.isAdminOn = false;
    this.userservice.isAdminOn = false;
    localStorage.removeItem('isUserOn')
    this.isUserOn = false
    this.userservice.isUserOn = false;
    this.router.navigate([""])
    this.username=""
  }
  userpage(){
    this.router.navigate(["userpage"])
  }
 

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
  
 ngOnInit(){
  // this.isAdminOn = this.userservice.isAdminOn
  //   console.log(this.isAdminOn)
//  
 }


  toggleCart(){
    this.service.toggleCart();
  }

}
