import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent {
  @Output() scrollToPizzas: EventEmitter <void> = new EventEmitter<void>();
  @Output() scrollToBurgers: EventEmitter <void> = new EventEmitter<void>();
  @Output() scrollToPastas: EventEmitter <void> = new EventEmitter<void>();
  @Output() scrollToFrites: EventEmitter <void> = new EventEmitter<void>();
  @Output() scrollToSalades: EventEmitter <void> = new EventEmitter<void>();
  @Output() scrollToBoissons: EventEmitter <void> = new EventEmitter<void>();
  selectedMenuItem: string = '';

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
  onPizzaClick(){
    this.scrollToPizzas.emit();
  }
  onBurgerClick(){
    this.scrollToBurgers.emit();
  }
  onPastaClick(){
    this.scrollToPastas.emit();
  }
  onFritesClick(){
    this.scrollToFrites.emit();
  }
  onSaladesClick(){
    this.scrollToSalades.emit();
  }
  onBoissonsClick(){
    this.scrollToBoissons.emit();
  }

}
