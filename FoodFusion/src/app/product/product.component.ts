import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/classes/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    
      @Input() product!:Product
      // @Input() data!: Product;
      
      ngOnInit(): void {
      }
}
