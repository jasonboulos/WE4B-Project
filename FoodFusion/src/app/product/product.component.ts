import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/classes/product';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
      
      constructor(private router: Router,private service:ProductserviceService){

      }
      
      @Input() product!:Product
      
      public prodId!:Product
  
      // @Input() data!: Product;
      
      ngOnInit(): void {
      }
      showFullProduct(){
        this.router.navigate(['/','nosproduits',this.product.id])
      }
      addProductToPanier(product:Product):void{
        this.service.addToCart(product)
        // this.service.nbSelectedItems +=1
        
        
      }
   
}
