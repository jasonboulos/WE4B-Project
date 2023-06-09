import { Component,ElementRef, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-frites',
  templateUrl: './frites.component.html',
  styleUrls: ['./frites.component.css']
})
export class FritesComponent {
 

  friteData!: Product[];

  

  constructor(private elementRef: ElementRef, private service : ProductserviceService) {
    this.service.getProducts().subscribe(
      data=>{
        this.friteData = data.filter((product: Product) => product.type === 'frite');
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
