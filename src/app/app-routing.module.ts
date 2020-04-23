import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import {AnnonceFormComponent} from './annonce-form/annonce-form.component';


//const routes: Routes = [];
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'annonces', component: AnnoncesComponent },
  {path: 'form', component: AnnonceFormComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
