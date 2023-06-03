import { Component } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
import { SpecialProduct } from 'src/classes/specialproduct';
 
@Component({
  selector: 'app-specialitems',
  templateUrl: './specialitems.component.html',
  styleUrls: ['./specialitems.component.css']
})
export class SpecialitemsComponent {
  SpecialProductarray : SpecialProduct[] = [];
  constructor(private service : ProductserviceService){
    this.service.getSpecialProducts().subscribe(data=>{this.SpecialProductarray = data})
  }

}
