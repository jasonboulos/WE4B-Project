import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from 'src/classes/product';


@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduct.component.html',
  styleUrls: ['./shopproduct.component.css']
})
export class ShopproductComponent {
  @Input() product!:Product
  quantity: number = 1;
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  updateQuantity() {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
  }
}
