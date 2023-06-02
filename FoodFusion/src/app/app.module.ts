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
    BoissonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
