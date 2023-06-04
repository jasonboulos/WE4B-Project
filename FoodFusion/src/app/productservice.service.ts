import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/classes/product';
import { SpecialProduct } from 'src/classes/specialproduct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  product !: Product;
  // pizzaData!: Product[];
  // burgerData!: Product[];
  productService: any;

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/product')
  }
  getSpecialProducts():Observable<Product[]>{
    return this.http.get<SpecialProduct[]>('http://localhost:3000/specialproducts')
  }
  
  // ngOnInit() {
  //   // Fetch pizza data
  //   this.productService.getProducts('pizza').subscribe((data: Product[]) => {
  //     // Use the data as needed (e.g., assign it to a variable)
  //     this.pizzaData = data;
  //   });

  //   // Fetch burger data
  //   this.productService.getProducts('burgers').subscribe((data: Product[]) => {
  //     // Use the data as needed (e.g., assign it to a variable)
  //     this.burgerData = data;
  //   });

  //   // Fetch data for other categories as needed
  // }
}
