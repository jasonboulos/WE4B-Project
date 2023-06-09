import { Component,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduct.component.html',
  styleUrls: ['./shopproduct.component.css']
})

export class ShopproductComponent {
  @Input() product!:Product
 public productToRemove!:Product
 showIngredients: boolean = false;
 

 constructor(private service:ProductserviceService){

 }
 
  public quantity: number = 1;
  decrementQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }
  

  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  incrementQuantity() {
    this.product.quantity++;
  }

  updateQuantity() {
    if (this.product.quantity < 1) {
      this.product.quantity = 1;
    }
  }
  removeProduct(product:Product){
    this.service.removeProduct(product)
    // this.service.nbSelectedItems-=1

  }

}
