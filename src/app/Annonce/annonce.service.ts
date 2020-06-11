import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Annonce} from './annonce';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import {Router} from "@angular/router";
import {Image} from "./image";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Annonce[] = [
    {
      id: 1,
      price: 1100,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 4,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 2,
      price: 400,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 1,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 3,
      price: 900,
      stage: 2,
      make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 2,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    },{
      id: 4,
      price: 600,
      stage: 2,
       make : 'BMW',
      model : 'X5',
      year: '2005',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      numberOfSeats: 4,
      options: '',
      dumpValve: '',
      airAdmission: '',
      turbo: '',
      exaust: '',
      torqueSinceTheLatestModification: 45,
      torque: 34,
      driveType: '',
      trim: '',
      airFilter: '',
      publishedDate: '',
      highPerformanceTuningCompany: '',
      intercooler: '',
      inSideColor: 'gray',
      co2: 120,
      euroNorme: 'Eruro 5',
      firstHand: true,
      outSideColor: 'red',
      fuelEconomySinceTheLatestModification: '',
      fuelEconomy: '',
      mileageSince1stModification: null,
      fiscalHorsePower: 43,
      horsePowerSinceTheLatestModification: 45,
      horsePower: 567,
      reinforcedCluth: false,
      numberOfDoor: 3,
      gearbox: 'manuelle',
      maxSpeed: 450,
      images: [{
        id: 3,
        path: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
      }]
    }
  ];
  energies: Object = [];
  makes: Object = [];
  models: Object = [];
  categories: Object = [];
  images: Image[] = [];

  constructor(private httpClient: HttpClient, private route: Router) {
    this.getMakes();
  }

  public getAnnonces(){
    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      console.dir(value);
      this.annonces = value;
    }, error => {
      console.log('Erreur : ' + error);
    });
  }

  public saveAnnonce(annonce: FormGroup) {
    console.dir(annonce);
    let header = new HttpHeaders().set("userToken", GlobalConfig.getCurrentUser().userToken);
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce, {headers: header})
      .subscribe(
        (res: Response) => {
          console.log('Enregistrement terminé !');
          // TODO
         // if (res.ok)
            this.route.navigate(['/offres'])
        },
        (error) => {
          console.dir("Error : " + error);
        }
      );
  }

  public getUserAnnonces() {
    let header = new HttpHeaders().set("userToken", GlobalConfig.getCurrentUser().userToken);
    this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl, {headers: header}).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.log('Erreur' + error);
    });
  }

  // TODO
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

  upload(image) {
    const uploadImage = new FormData();
    uploadImage.append('image', image, image.name);

    this.httpClient.post<Image>(GlobalConfig.saveImageApiUrl, uploadImage)
    .subscribe((value) => {
      if (value != null) {
        console.log('Image uploaded successfully');
        //this.images[0] = "data:image/png;base64," + value.path;
        console.log(value.id);

        let index = this.images.length;
        if(index == 6){
          for (let i = 0; i < 5; i++){
            this.images[i] = this.images[i + 1];
          }
          index = 5;
        }
        value.path =  "data:image/png;base64," + value.path;
        this.images[index] = value;

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

  // TODO
  filter(id: any, value: any) {

    let params = new HttpParams().set("id",id).set("value", value);

    this.httpClient.get(GlobalConfig.getAnnonceFiltred, {params: params}).subscribe(response => {
      console.log("reception ok");
      console.dir(response);
    });
  }


  // TODO
  getEnergies() {
    this.energies = [
      {energy: 'diesel'},
      {energy: 'SP95'},
      {energy: 'SP98'}
    ]
    /*this.httpClient.get(GlobalConfig.getEnergiesList).subscribe(value => {
      this.energies = value;
    }); */
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

  getCategories(model: string) {
    let params = new HttpParams().set('model', model);
    this.httpClient.get(GlobalConfig.getCategoryByModelApi, {params: params}).subscribe(value => {
      this.categories = value;
    });
    return this.categories;
  }

}



