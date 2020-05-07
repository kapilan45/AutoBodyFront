import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { GalleryModule } from '@ngx-gallery/core';
import { AnnoncesComponent } from './annonces/annonces.component';
import { HttpClientModule } from '@angular/common/http';
import {LogFormComponent} from './log-form/log-form.component';
import { GestionAnnoncesComponent } from './gestion-annonces/gestion-annonces.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { DepotAnnoncesComponent } from './depot-annonces/depot-annonces.component';
import { ModificationAnnoncesComponent } from './modification-annonces/modification-annonces.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    CarsComponent,
    AnnoncesComponent,
    LogFormComponent,
    GestionAnnoncesComponent,
    ModalConfirmComponent,
    DepotAnnoncesComponent,
    ModificationAnnoncesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GalleryModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
