import { Component,OnInit } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public A!:Product[]
  isCartOpen = false;
  isCheckoutClicked: boolean = false;

  constructor(private service:ProductserviceService){
    
  }
  ngOnInit() {
    this.A =this.service.SelectedItemsarray
    this.service.productRemoved.subscribe(()=>{
      this.A = this.service.SelectedItemsarray
    })
    this.service.cartOpen$.subscribe(() => {
      this.isCartOpen = !this.isCartOpen;
    });
  }
  closecart(){
    this.isCartOpen = false;
    this.isCheckoutClicked = false;
  }
  checkout(): void {
    this.isCheckoutClicked = true;
  }
  undocheckout():void{
    this.isCheckoutClicked = false;
  }
  calculateTotalPrice():number{
    let totalprice:number = 0;
    this.A.forEach((prd:Product)=>{
      totalprice += prd.price*prd.quantity
    })
    return totalprice
  }

}
