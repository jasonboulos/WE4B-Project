import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/classes/product';
import { SpecialProduct } from 'src/classes/specialproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    
      @Input() product!:Product
      
      
      ngOnInit(): void {
      }
}
