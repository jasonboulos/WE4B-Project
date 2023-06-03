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

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4000/product')
  }
  getSpecialProducts():Observable<Product[]>{
    return this.http.get<SpecialProduct[]>('http://localhost:4000/specialproducts')
  }
}
