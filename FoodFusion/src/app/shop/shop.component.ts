import { Component,OnInit } from '@angular/core';
import { Product } from 'src/classes/product';
import { ProductserviceService } from '../productservice.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public A!:Product[]
  public B!:Product[]

  isCartOpen = false;
  isCheckoutClicked: boolean = false;
  isPayerClicked: boolean = false;
  name: String = "";
  address: String = ""
  phonenumber: String = ""
  missinginput:boolean = false;
  currentDate:Date;
  usern!:string

  constructor(private service:ProductserviceService,private userservice:UsersService){
    this.currentDate = new Date();
  }
  payer(){
    
    // this.isCheckoutClicked = false
    if(this.name == "" || this.address =="" || this.phonenumber ==""){
      this.missinginput = true;
    }
    else{
      this.missinginput = false
      this.isPayerClicked = true;
      if(localStorage.getItem('name')){
        console.log("enter")
        this.usern = localStorage.getItem('name')??''
        console.log(this.usern)
        this.userservice.getUserByname(this.usern).subscribe(user=>{
          if(user){
            console.log(user)
            user.points += this.calculateTotalPrice()*5
            user.commandes +=1
            console.log(user.points)
            this.userservice.updateuser(user).subscribe(res=>console.log("user updated",res))
          }

        })

      }
      this.service.SelectedItemsarray = []
      this.B = this.A;
      this.A = []

    }
    
  }
  continueshopping(){
    this.A =this.service.SelectedItemsarray
    this.service.productRemoved.subscribe(()=>{
      this.A = this.service.SelectedItemsarray
    })
    this.isCartOpen = false;
    this.isCheckoutClicked= false
    this.isPayerClicked = false
    this.B = []
  }

  ngOnInit() {
    this.A =this.service.SelectedItemsarray
    this.service.productRemoved.subscribe(()=>{
      this.A = this.service.SelectedItemsarray
    })
    this.service.cartOpen$.subscribe(() => {
      this.isCartOpen = !this.isCartOpen;
    });
  }
  downloadPdf(){
   
      const element = document.getElementById('pdf');
  
      if (!element) {
        console.error('Element not found');
        return;
      }
  
      setTimeout(() => {
        html2canvas(element).then((canvas) => {
          const contentDataURL = canvas.toDataURL('image/png');
          const pdf = new jspdf.jsPDF();
          const imgWidth = 210; 
          // const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const imgHeight = 330
  
          pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('facture_FoodFusion.pdf');
        });
      }, 500); // Adjust the delay time if necessary
    }
   

  
  closecart(){
    this.isCartOpen = false;
    this.isCheckoutClicked = false;
    this.isPayerClicked = false;
    this.A =this.service.SelectedItemsarray
    this.service.productRemoved.subscribe(()=>{
      this.A = this.service.SelectedItemsarray
    })
    this.B = []
  }
  checkout(): void {
    this.isCheckoutClicked = true;
    this.isPayerClicked = false;
    this.B = []
  }
  undocheckout():void{
    this.isCheckoutClicked = false;
    this.B = []
  }
  calculateTotalPrice():number{
    let totalprice:number = 0;
    if(this.A !=null){
      this.A.forEach((prd:Product)=>{
        totalprice += prd.price*prd.quantity
      })

    }
    if(this.B !=null){
      this.B.forEach((prd:Product)=>{
        totalprice += prd.price*prd.quantity
      })
    }
   
    return totalprice
  }

}
