import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fullproduct',
  templateUrl: './fullproduct.component.html',
  styleUrls: ['./fullproduct.component.css']
})
export class FullproductComponent implements OnInit{
  public product !:Product;
 public id !:number
 constructor(private activatedroute : ActivatedRoute, private service : ProductserviceService) { 
  
   
       
 }
  ngOnInit():void{
    this.id= parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0') 
    this.service.getPoductById(this.id).subscribe(data=>{this.product=data})
  }



  

}
