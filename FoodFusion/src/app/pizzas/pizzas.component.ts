import { Component,ElementRef, Input } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  pizzaData!: Product[];

  

  constructor(private elementRef: ElementRef, private service : ProductserviceService) {
    this.service.getProducts().subscribe(
      data=>{
        this.pizzaData = data.filter((product: Product) => product.type === 'pizza');
      })
  }

  scrollIntoView() {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });  }
  
  // data!:
  // @Input() data!: Product[];

  // constructor(private productService: ProductserviceService) {}

  // ngOnInit() {
  //   this.productService.getProducts('pizza').subscribe((data: Product[]) => {
  //     this.pizzaData = data;
  //   });
  // }

}
