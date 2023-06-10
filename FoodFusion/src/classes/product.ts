export class Product {
  id: number;
  type: string;
  isSpecial:boolean;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity:number = 1;


  constructor(id: number,type:string,isSpecial:boolean ,name: string, price: number, description: string, imageUrl: string,quantity:number) {
    this.id = id
    this.type = type;
    this.isSpecial = isSpecial;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.quantity = quantity
    
  }
}