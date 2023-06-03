export class SpecialProduct {
    id: number;
    type: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  
  
    constructor(id: number,type:string, name: string, price: number, description: string, imageUrl: string) {
      this.id = id
      this.type = type;
      this.name = name;
      this.price = price;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  }