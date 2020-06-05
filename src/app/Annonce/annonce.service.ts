import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Annonce} from './annonce';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  public annonce: Annonce;
  energies: Object = [];
  makes: Object = [];
  models: Object = [];
  categories: Object = [];

  constructor(private httpClient: HttpClient, private route: Router) { }

  public saveAnnonce(annonce: FormGroup) {
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce)
      .subscribe(
        (res: Response) => {
          console.log('Enregistrement terminé !');
          // TODO
          if (res.ok)
            this.route.navigate(['/offres'])
        },
        (error) => {
          console.dir(error);
          console.log('Erreur ! : ' + error);
        }
      );
  }

  public getUserAnnonces() {
    let param = new HttpParams().set("user", "test");
    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl, {params: param}).subscribe(value => {
      // this.annonces = value;
      console.dir(value);
      console.dir(this.annonce);
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
        console.dir(value);
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

  filter(id: any, value: any) {

    let params = new HttpParams().set("id",id).set("value", value);

    this.httpClient.get(GlobalConfig.getAnnonceFiltred, {params: params}).subscribe(response => {
      console.log("reception ok");
      console.dir(response);
    });
  }


  getEnergies(): object {
    this.httpClient.get(GlobalConfig.getEnergiesList).subscribe(value => {
      this.energies = value;
    });
    return this.energies;
  }

  getMakes() {
    this.httpClient.get(GlobalConfig.getMakeListApi).subscribe(value => {
      this.makes = value;
    });
    return [{
      make: 'audi'
    },{
      make: 'bmw'
    }]
    // return this.makes;
  }

  getModels(make: string) {
    let params = new HttpParams().set("make", make);
    this.httpClient.get(GlobalConfig.getMakeListApi, {params: params}).subscribe(response => {
      this.models = response;
    });
    return this.models;
  }

  getCategories(make: string, model: string) {
    let params = new HttpParams().set('make', make).set('model', model);
    this.httpClient.get(GlobalConfig.getMakeListApi, {params: params}).subscribe(value => {
      this.categories = value;
    });
    return this.categories;

    return [
      {category: 'break'},
      {category: 'citadin'}
    ];
  }

}



