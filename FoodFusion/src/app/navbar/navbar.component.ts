import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedMenuItem: string = '';

  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }

}
