import { Component,ElementRef, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrls: ['./pastas.component.css']
})
export class PastasComponent {
 

  pastaData!: Product[];

  

  constructor(private elementRef: ElementRef, private service : ProductserviceService) {
    this.service.getProducts().subscribe(
      data=>{
        this.pastaData = data.filter((product: Product) => product.type === 'pasta');
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
