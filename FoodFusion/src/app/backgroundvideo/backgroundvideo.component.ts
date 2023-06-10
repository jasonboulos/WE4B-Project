import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backgroundvideo',
  templateUrl: './backgroundvideo.component.html',
  styleUrls: ['./backgroundvideo.component.css']
})
export class BackgroundvideoComponent {
  constructor(private router: Router){

  }
  orderNow(){
    this.router.navigate(["nosproduits"])
  }
}
