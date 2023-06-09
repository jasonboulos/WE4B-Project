import { Component,ViewChild,ElementRef, Input } from '@angular/core';
import { PizzasComponent } from '../pizzas/pizzas.component';
import { BurgersComponent } from '../burgers/burgers.component';
import { PastasComponent } from '../pastas/pastas.component';
import { FritesComponent } from '../frites/frites.component';
import { BoissonsComponent } from '../boissons/boissons.component';
import { SaladesComponent } from '../salades/salades.component';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-nosproduits',
  
  templateUrl: './nosproduits.component.html',
  styleUrls: ['./nosproduits.component.css']
  
})
export class NosproduitsComponent {
  @ViewChild(PizzasComponent) pizzascomponent!: PizzasComponent;
  @ViewChild(BurgersComponent) burgerscomponent !: BurgersComponent;
  @ViewChild(PastasComponent) pastacomponent !: PastasComponent;
  @ViewChild(FritesComponent) fritescomponent!: FritesComponent;
  @ViewChild(BoissonsComponent) boissonscomponent !: BoissonsComponent;
  @ViewChild(SaladesComponent) saladescomponent !: SaladesComponent;
  scrollToPizzas() {
    if (this.pizzascomponent) {
      
      this.pizzascomponent.scrollIntoView();
    }
  }
  scrollToBurgers(){
    if(this.burgerscomponent){
      this.burgerscomponent.scrollIntoView();
    }

  }
  scrollToPastas(){
    if(this.pastacomponent){
      this.pastacomponent.scrollIntoView();
    }

  }
  scrollToFrites() {
    if (this.fritescomponent) {
      
      this.fritescomponent.scrollIntoView();
    }
  }
  scrollToBoissons(){
    if(this.boissonscomponent){
      this.boissonscomponent.scrollIntoView();
    }

  }
  scrollToSalades(){
    if(this.saladescomponent){
      this.saladescomponent.scrollIntoView();
    }
  }
  ngOnInit() {
    // Fetch pizza data
    // this.productService.getProducts('pizza').subscribe((data: Product[]) => {
    //   // Use the data as needed (e.g., assign it to a variable)
    //   this.pizzaData = data;
    // });

    // // Fetch burger data
    // this.productService.getProducts('burgers').subscribe((data: Product[]) => {
    //   // Use the data as needed (e.g., assign it to a variable)
    //   this.burgerData = data;
    // });

    // Fetch data for other categories as needed
    //this.productService.getProducts().subscribe((data: Product[]) => {
      // Filter the data for each category
      // this.burgerData = data.filter((product: Product) => product.type === 'burger');
      //this.pizzaData = data.filter((product: Product) => product.type === 'pizza');
      // this.pastaData = data.filter((product: Product) => product.category === 'pasta');
    //}
  }
  
}
