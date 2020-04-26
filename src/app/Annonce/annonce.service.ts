import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from './annonce';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
    private annonces = {
        prix: 40,
        stage: 2,
        marque: 'Toyata',
        modele: 'X2',
        annee: 2105,
        kilometrage: 10,
        categorie: 'citadin',
        energie: 'essence',
        localisation: 'paris',
        image: 'https://images.caradisiac.com/images/1/5/9/4/181594/S0-retrouvez-nous-jeudi-27-fevrier-pour-decouvrir-en-live-l-audi-a5-restylee-2020-621692.jpg'
      };

  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:4200/api/annonce/save';
  }


  public save(annonce: Annonce) {
    console.dir(annonce);
    return this.httpClient.post(this.baseUrl, annonce);
  }

  public saveAnnonce(annonce: FormGroup) {

    console.dir(annonce);
    console.dir(this.annonces);
    this.httpClient
      .post('http://localhost:8080/api/annonce', annonce)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.dir(error);
          console.log('Erreur ! : ' + error);
        }
      );
  }
}



