import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosproduitsComponent } from './nosproduits/nosproduits.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BurgersComponent } from './burgers/burgers.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PastasComponent } from './pastas/pastas.component';
import { FritesComponent } from './frites/frites.component';
import { SaladesComponent } from './salades/salades.component';
import { BoissonsComponent } from './boissons/boissons.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'nosproduits', component : NosproduitsComponent,
  children: [
    {path : '', redirectTo: '', pathMatch: 'full'},
    {path : 'burgers',component: BurgersComponent},
    {path : 'pizzas',component: PizzasComponent},
    {path : 'pastas',component: PastasComponent},
    {path : 'frites',component: FritesComponent},
    {path : 'salades',component: SaladesComponent},
    {path : 'boissons',component: BoissonsComponent},
  ]},
  {path : 'contact', component : ContactComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signin', component : SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
