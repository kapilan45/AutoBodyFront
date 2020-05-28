import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import {GestionAnnoncesComponent} from './gestion-annonces/gestion-annonces.component';
import {LogFormComponent} from './log-form/log-form.component';
import {DepotAnnoncesComponent} from './depot-annonces/depot-annonces.component';
import {ModificationAnnoncesComponent} from './modification-annonces/modification-annonces.component';
import {ModalConfirmComponent} from "./modal-confirm/modal-confirm.component";


// const routes: Routes = [];
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LogFormComponent},
  {path: 'cars/:annonceId', component: CarsComponent},
  {path: 'annonces', component: AnnoncesComponent },
  {path: 'form', component: DepotAnnoncesComponent },
  {path: 'ga', component: GestionAnnoncesComponent },
  {path: 'modify', component: ModificationAnnoncesComponent },
  {path: 'modal', component: ModalConfirmComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
