import { Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { CarsComponent } from './cars/cars.component';
import { DepotAnnoncesComponent } from './depot-annonces/depot-annonces.component';
import { GestionAnnoncesComponent } from './gestion-annonces/gestion-annonces.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LogFormComponent } from './log-form/log-form.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: AnnoncesComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LogFormComponent },
  { path: 'offres/:annonceId', component: CarsComponent },
  { path: 'offres', component: AnnoncesComponent },
  { path: 'depot', canActivate: [AuthGuardService], component: DepotAnnoncesComponent },
  { path: 'depot/:id', canActivate: [AuthGuardService], component: DepotAnnoncesComponent },
  { path: 'gestion_annonce', canActivate: [AuthGuardService], component: GestionAnnoncesComponent },
];
