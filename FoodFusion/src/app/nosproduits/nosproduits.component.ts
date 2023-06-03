import { Component,ViewChild,ElementRef } from '@angular/core';
import { PizzasComponent } from '../pizzas/pizzas.component';
import { BurgersComponent } from '../burgers/burgers.component';
import { PastasComponent } from '../pastas/pastas.component';
@Component({
  selector: 'app-nosproduits',
  
  templateUrl: './nosproduits.component.html',
  styleUrls: ['./nosproduits.component.css']
  
})
export class NosproduitsComponent {
  @ViewChild(PizzasComponent) pizzascomponent!: PizzasComponent;
  @ViewChild(BurgersComponent) burgerscomponent !: BurgersComponent;
  @ViewChild(PastasComponent) pastacomponent !: PastasComponent;
  
  scrollToPizzas() {
    if (this.pizzascomponent) {
      console.log("pizza");
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
  
}
