import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
  makeList = [];

  constructor(private httpClient: HttpClient) {}

  public saveAnnonce(annonce: FormGroup) {

    console.dir(annonce);
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

  upload(image) : any {
    const uploadImage = new FormData();
    uploadImage.append('image', image, image.name);


    this.httpClient.post('http://localhost:8080/api/image', uploadImage)
    .subscribe((value) => {
      if (value != null) {
        console.log('Image uploaded successfully');
        return value;
      } else {
        console.log('Image not uploaded successfully');
        return null;
      }
    });

    return null;
  }


  /*
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/api/image/')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  */
  getMakeList() {

    return this.httpClient.get(GlobalConfig.getMakeListApi).subscribe(value => {

    });

    return [
      {make: 'bmw'},
      {make: 'audi'}
    ];
  }

  filter(id: any, value: any) {

    let params = new HttpParams().set("id",id).set("value", value);

    this.httpClient.get(GlobalConfig.getAnnonceFiltred, {params: params}).subscribe(response => {
      console.log("reception ok");
    });
  }
}



