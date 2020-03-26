import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonces = [
    {
      prix: 400,
      stage: 2,
      marque: 'BMW',
      modele: 'X5',
      annee: 2005,
      kilometrage: 14000,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      prix: 880,
      stage: 2,
      marque: 'BMW',
      modele: 'X2',
      annee: 2050,
      kilometrage: 100,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      prix: 40,
      stage: 2,
      marque: 'BMW',
      modele: 'X2',
      annee: 2105,
      kilometrage: 10,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    }
  ];

  constructor(httpClient: HttpClient) {
    httpClient.get<any[]>('http://localhost:8080/annonces').subscribe(value => {
      this.annonces = value;
      console.dir(value);
    }, error => {
      console.log('Erreur : ' + error); });
  }

  ngOnInit() {
  }

}
