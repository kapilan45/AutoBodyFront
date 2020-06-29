import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Annonce} from '../models/annonce';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import {Router} from "@angular/router";
import {Image} from "../models/image";
import {AuthStorageService} from "../Services/auth-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Annonce[];
  energies: Object = [];
  makes: Object = [];
  models: Object = [];
  categories: Object = [];
  images: Image[] = [];

  constructor(private httpClient: HttpClient, private route: Router) {
  }

  public getAnnonces(){
    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  public saveAnnonce(annonce: FormGroup) {
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce).subscribe(
        (res: Response) => {
          console.log('Enregistrement terminé !');
          // TODO
         // if (res.ok)
          this.images = [];
          this.route.navigate(['/offres'])
        },
        (error) => {
          console.log("erreur to save a annonce");
          console.dir(error);
        }
      );
  }

  public getUserAnnonces() {
    this.httpClient.get<Annonce[]>(GlobalConfig.getUserAnnoncesApiUrl).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  public deleteAnnonce(selected_annonce: Annonce){
    this.httpClient.put<Annonce[]>(GlobalConfig.deleteAnnonceApiUrl, selected_annonce).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  upload(image) {
    const uploadImage = new FormData();
    uploadImage.append('image', image, image.name);

    this.httpClient.post<Image>(GlobalConfig.saveImageApiUrl, uploadImage)
    .subscribe((value) => {
      if (value != null) {
        console.log('Image uploaded successfully');

        let index = this.images.length;
        if(index == 6){
          for (let i = 0; i < 5; i++){
            this.images[i] = this.images[i + 1];
          }
          index = 5;
        }
        //value.path =  "data:image/png;base64," + value.path;
        this.images[index] = value;

      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }


  filter(id: any, value: any) {

    let params = new HttpParams().set("basicFilter", value);

    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnonceBasicFilter, {params: params}).subscribe(response => {
      console.log("reception ok");
      console.dir(response);
      this.annonces = response;
    });
  }


  getEnergies() {
    this.energies = ['diesel','SP95','SP98' ];
  }

  getMakes() {
    this.httpClient.get(GlobalConfig.getMakeListApi).subscribe(value => {
      this.makes = value;
    });
  }

  getModels(make: string) {
    let params = new HttpParams().set("make", make);
    this.httpClient.get(GlobalConfig.getModelByMakeApi, {params: params}).subscribe(response => {
      this.models = response;
    });
  }

  getCategories() {
    this.httpClient.get(GlobalConfig.getCategoryByModelApi).subscribe(value => {
      this.categories = value;
    });
  }

  showCompletDetail(id: number) {
    this.route.navigate(["/offres/", id]);
  }

  filterAnnonce(value: FormGroup) {
    console.dir(value);
    let url: string = 'make:' + value['make'] + ',model:' + value['model'] + ',category:' + value['category'] + ',price>' + value['minPrice'] + ',price<' + value['maxPrice'] + ',energy:' + value['energy'] + ',horsePower>' + value['minHorsePower'] + ',horsePower<' + value['maxHorsePower'] + ',fiscalHorsePower>' + value['minFiscalHorsePower'] + ',fiscalHorsePower<' + value['maxFiscalHorsePower'];
    console.log(url);
    const regex = /null/gi;
    url = url.replace(regex, '');
    console.log(url);

    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnonceFiltred+url).subscribe(response => {
      console.log("reception filtred annonce OK ok");
      console.dir(response);
      this.annonces = response;
    });
  }
}



