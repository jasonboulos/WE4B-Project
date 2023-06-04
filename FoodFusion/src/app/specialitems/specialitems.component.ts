import { Component } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';

 
@Component({
  selector: 'app-specialitems',
  templateUrl: './specialitems.component.html',
  styleUrls: ['./specialitems.component.css']
})
export class SpecialitemsComponent {
  SpecialProductarray!: Product[];
  constructor(private service : ProductserviceService){
    this.service.getProducts().subscribe(data=>{this.SpecialProductarray = data.filter((product:Product) =>product.isSpecial === true );})
   
  }

}
