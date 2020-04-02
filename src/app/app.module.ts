import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { GalleryModule } from '@ngx-gallery/core';
import { AnnoncesComponent } from './annonces/annonces.component';
import { HttpClientModule } from '@angular/common/http';
import { DepotAnnonceComponent } from './depot-annonce/depot-annonce.component';
import {AnnonceFormComponent} from './annonce-form/annonce-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    CarsComponent,
    AnnoncesComponent,
    DepotAnnonceComponent,
    AnnonceFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
