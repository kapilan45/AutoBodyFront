import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import {GestionAnnoncesComponent} from './gestion-annonces/gestion-annonces.component';
import {LogFormComponent} from './log-form/log-form.component';
import {DepotAnnoncesComponent} from './depot-annonces/depot-annonces.component';
import {AuthGuardService} from "./Services/auth-guard.service";


// const routes: Routes = [];
const routes: Routes = [
  {path: '', component: AnnoncesComponent},
  {path: 'accueil', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LogFormComponent},
  {path: 'offres/:annonceId', component: CarsComponent},
  {path: 'offres', component: AnnoncesComponent },
  {path: 'depot', component: DepotAnnoncesComponent },
  {path: 'depot/:id', canActivate: [AuthGuardService], component: DepotAnnoncesComponent },
  {path: 'gestion_annonce', canActivate: [AuthGuardService], component: GestionAnnoncesComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
