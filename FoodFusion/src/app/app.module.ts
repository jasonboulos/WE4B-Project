import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BackgroundvideoComponent } from './backgroundvideo/backgroundvideo.component';
import { SpecialitemsComponent } from './specialitems/specialitems.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NosproduitsComponent } from './nosproduits/nosproduits.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MenulistComponent } from './menulist/menulist.component';
import { BurgersComponent } from './burgers/burgers.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PastasComponent } from './pastas/pastas.component';
import { FritesComponent } from './frites/frites.component';
import { SaladesComponent } from './salades/salades.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { ProductserviceService } from './productservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FullproductComponent } from './fullproduct/fullproduct.component';
import { ShopComponent } from './shop/shop.component';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import { FormsModule } from '@angular/forms';
import { GestionComponent } from './gestion/gestion.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserleftComponent } from './userleft/userleft.component';
import { UserrightComponent } from './userright/userright.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    BackgroundvideoComponent,
    SpecialitemsComponent,
    HomebodyComponent,
    FeedbackComponent,
    NewsletterComponent,
    NosproduitsComponent,
    ContactComponent,
    LoginComponent,
    SigninComponent,
    MenulistComponent,
    BurgersComponent,
    PizzasComponent,
    PastasComponent,
    FritesComponent,
    SaladesComponent,
    BoissonsComponent,
    FullproductComponent,
    ShopComponent,
    ShopproductComponent,
    GestionComponent,
    UserpageComponent,
    UserleftComponent,
    UserrightComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductserviceService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
