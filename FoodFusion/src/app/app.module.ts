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
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
