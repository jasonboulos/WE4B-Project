import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedMenuItem: string = '';
   nbselecteditems:number = 0;
  constructor(private service: ProductserviceService){
    
    
    
  }
  getSelectedItemsNumber(){
    return this.service.nbSelectedItems
  }
 

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
  
 ngOnInit(){
 
 }


  toggleCart(){
    this.service.toggleCart();
  }

}
