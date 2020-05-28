import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Annonce} from '../Annonce/annonce';
import {GlobalConfig} from '../global-config';
import {AnnonceService} from "../Annonce/annonce.service";
import {of} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  //annonces: Annonce[];
   annonces = [
    {
      id: 1,
      prix: 1100,
      stage: 2,
      make: { make : 'BMW'},
      model: {model : 'X5'},
      annee: 2005,
      kilometrage: 14000,
      categories: {category: 'break'},
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },{
      id: 2,
      prix: 400,
      stage: 2,
      make: { make : 'BMW'},
      model: {model : 'X5'},
      annee: 2005,
      kilometrage: 14000,
      categories: {category: 'break'},
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },{
      id: 3,
      prix: 900,
      stage: 2,
      make: { make : 'BMW'},
      model: {model : 'X5'},
      annee: 2005,
      kilometrage: 14000,
      categories: {category: 'break'},
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },{
      id: 4,
      prix: 600,
      stage: 2,
      make: { make : 'BMW'},
      model: {model : 'X5'},
      annee: 2005,
      kilometrage: 14000,
      categories: {category: 'break'},
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    }
  ];
   energies = [];

  constructor(private httpClient: HttpClient, private annonceService: AnnonceService, private route: Router) {
    httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      console.dir(value);
      //this.annonces = value;
    }, error => {
      console.log('Erreur : ' + error); });
  }

  ngOnInit() {
    of(this.getEnergies()).subscribe(energies => {
      this.energies = energies;
    });
  }

  onSelectOffre(annonceId: Int32Array) {}

  onSelectFilter(event: any) {

    //let val = event.target.id;
    let val = event.target.id;
    console.dir(event);
    console.dir(event.target);
    console.dir(event.target.id);
    console.dir(event.target.value);

    this.annonceService.filter(event.target.id, event.target.value);
  }

  getEnergies() {
    return [
      { value: 'Diesel' },
      { value: 'Essence' },
    ];
  }

  getMakes() {
    return [
      {make: 'bmw'},
      {make: 'audi'}
    ];
  }

  getModeles(annonceForm: FormGroup) {
    return [
      {modele: 'x4'},
      {modele: 'x5'}
    ];
  }

  getCategories(annonceForm: FormGroup) {
    return [
      {category: 'break'},
      {category: 'citadin'}
    ];
  }

  showCompletDetail(id: number) {
    // redirect to new routes
    this.route.navigate(["/cars/3"]);
  }
}
