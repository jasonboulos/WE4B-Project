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
  constructor(private service:ProductserviceService){
    this.A =this.service.SelectedItemsarray
  }
  ngOnInit() {
    this.service.cartOpen$.subscribe(() => {
      this.isCartOpen = !this.isCartOpen;
    });
  }

}
