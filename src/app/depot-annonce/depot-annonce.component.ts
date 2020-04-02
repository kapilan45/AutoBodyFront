import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-depot-annonce',
  templateUrl: './depot-annonce.component.html',
  styleUrls: ['./depot-annonce.component.scss']
})
export class DepotAnnonceComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  annonce ={
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
    };

  constructor(httpClient: HttpClient) {
    httpClient.get<any>('http://localhost:8080/api/form').subscribe(value => {
      console.log('test form genaration');
      console.log(value);
      this.annonce = value;
      console.dir(value);
    }, error => {
      console.log('Erreur : ' + error);
      console.dir(error);
    });
  }

  ngOnInit() {
  }

}
