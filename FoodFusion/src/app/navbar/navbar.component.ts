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
   isAdminOn!:boolean
  constructor(private service: ProductserviceService, public userservice:UsersService, private router: Router){
    

    
    
  }
  getSelectedItemsNumber():number{
    return this.service.nbSelectedItems()
  }
  logout(){
    this.userservice.isAdminOn = false;
    this.router.navigate([""])
  }
 

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
  
 ngOnInit(){
  // this.isAdminOn = this.userservice.isAdminOn
  //   console.log(this.isAdminOn)
 
 }


  toggleCart(){
    this.service.toggleCart();
  }

}
