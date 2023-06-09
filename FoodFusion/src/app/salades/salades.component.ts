import { Component,ElementRef, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-salades',
  templateUrl: './salades.component.html',
  styleUrls: ['./salades.component.css']
})
export class SaladesComponent {
 

  saladeData!: Product[];

  

  constructor(private elementRef: ElementRef, private service : ProductserviceService) {
    this.service.getProducts().subscribe(
      data=>{
        this.saladeData = data.filter((product: Product) => product.type === 'salade');
      })
  }

  scrollIntoView() {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  

}
