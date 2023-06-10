import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/classes/product';
import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import { user } from 'src/classes/user';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  product !: Product;
  // pizzaData!: Product[];
  // burgerData!: Product[];
  private currentId = 0;
  SelectedItemsarray :Product[] = [];
  // public nbSelectedItems :number = 0;
  productRemoved: EventEmitter<void> = new EventEmitter<void>();
  productService: any;

  constructor(private http: HttpClient) {
    

   }
  private cartOpenSubject = new Subject<boolean>();
  cartOpen$ = this.cartOpenSubject.asObservable();

  toggleCart() {
    this.cartOpenSubject.next(true);
    
  }
  nbSelectedItems():number{
    return this.SelectedItemsarray.length;
  }
  removeProduct(product: Product): void {
    this.SelectedItemsarray = this.SelectedItemsarray.filter((p: Product) => p !== product);
    this.productRemoved.emit();
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:4000/product')
  }
  getProductsCount(): Observable<number> {
    return this.http.get<number>('http://localhost:4000/product');
  }
  getPoductById(prd_idx: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:4000/product/' + prd_idx);
  }
  addToCart(product:Product){
    if (!this.SelectedItemsarray.some((p: Product) => p === product)){
      this.SelectedItemsarray.push(product)
    }
    
    
  }
  addProduct(product:Product):Observable<Product>{
    // product.id = ++this.currentId
    return this.http.post<Product>('http://localhost:4000/product',product)

    
  }
  deleteProduct(product:Product):Observable<Product>{
    return this.http.delete<Product>(`http://localhost:4000/product/${product.id}`);
    
  }

  


  // getPrdByIndex(id: number): Product {
  //   this.http.get<Product>('http://localhost:4000/product/'+id)
  //   .subscribe(data => {
  //   this.product = data
  //   })
  //   return this.product
  //   }
  // getSpecialProducts():Observable<Product[]>{
  //   return this.http.get<SpecialProduct[]>('http://localhost:4000/specialproducts')
  // }
  
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
