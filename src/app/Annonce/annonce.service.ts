import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from './annonce';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  public annonces: Annonce;

  /* public annonces = {
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
      }; */

  constructor(private httpClient: HttpClient) {}

  public saveAnnonce(annonce: FormGroup) {
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce)
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

  public getAnnonces() {
    this.httpClient.get<Annonce>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      // this.annonces = value;
      console.dir(value);
      console.dir(this.annonces);
    }, error => {
      console.log('Erreur' + error);
    });
  }

  modifyAnnonce(annonce: FormGroup) {
    this.httpClient
      .post(GlobalConfig.modifyAnnonceApiUrl, annonce)
      .subscribe(
        () => {
          console.log('Modification terminé !');
        },
        (error) => {
          console.dir(error);
          console.log('Erreur modification ! : ' + error);
        }
      );
  }
}



