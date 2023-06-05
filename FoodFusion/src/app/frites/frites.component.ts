import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-frites',
  templateUrl: './frites.component.html',
  styleUrls: ['./frites.component.css']
})
export class FritesComponent {
  public A!:Product[]
  constructor(private service:ProductserviceService){
    this.A =this.service.SelectedItemsarray
  }
}
