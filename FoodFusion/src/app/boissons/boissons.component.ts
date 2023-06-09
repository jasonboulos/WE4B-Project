import { Component,ElementRef, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent {
 

  boissonData!: Product[];

  

  constructor(private elementRef: ElementRef, private service : ProductserviceService) {
    this.service.getProducts().subscribe(
      data=>{
        this.boissonData = data.filter((product: Product) => product.type === 'boisson');
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
