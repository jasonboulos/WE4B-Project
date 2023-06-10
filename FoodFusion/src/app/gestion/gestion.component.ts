import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from 'src/classes/product';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  public product :Product = new Product(0,"",false,"",0,"","",1)
  public checkboxvalue:boolean = false
  public selectedOption: string = '';
  public missingtype:boolean = false;
  public products!: Product[]
  public type:String="";
  public productadded: boolean = false;

constructor(private service: ProductserviceService){
  this.service.getProducts().subscribe(data=>this.products = data)
 
 
}
getNumberProduct():number{
  return this.products.length
}
deleteproduct(product:Product){
  this.service.deleteProduct(product).subscribe(() => {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  });

}
getProductbytype(){
  console.log(this.type)
  if(this.type==""){
    this.service.getProducts().subscribe(data=>this.products=data)
  }
  else{
    this.service.getProducts().subscribe(
      data=>{
        this.products = data.filter((product: Product) => product.type === this.type);
      })
  }
  
}
addProduct() {
  if(this.product.type =="" ||this.product.imageUrl=="" ||this.product.description=="" || this.product.name ==""|| this.product.price ==0){
    this.missingtype=true;
    this.productadded = false;
    
  }
  else{
    this.service.getProducts().subscribe(products => {
      const productCount = products.length;
      this.product.id = productCount + 1;
      console.log(this.product.id)
      this.productadded = true;
      this.missingtype = false;
      this.service.addProduct(this.product).subscribe(data => {
        this.product = data;
      });
    });

  }

}
getProducts(){
 
}
}
