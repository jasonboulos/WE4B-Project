import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { user } from 'src/classes/user';

@Component({
  selector: 'app-userleft',
  templateUrl: './userleft.component.html',
  styleUrls: ['./userleft.component.css']
})
export class UserleftComponent {
  username!:string
  public userinfo!:user[]
  constructor(private service: UsersService) {
    this.username = localStorage.getItem('name') ?? '';
    this.service.getUsers().subscribe(data => {
      this.userinfo = data.filter(user => user.username === this.username);
      console.log(this.userinfo);
    });
  }
  getIntegerPart(number: number): number {
    return Math.floor(number);
  }
  
}
