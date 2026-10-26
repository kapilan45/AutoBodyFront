import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, map, of, tap} from 'rxjs';
import {Annonce} from '../models/annonce';
import {GlobalConfig} from '../global-config';
import {Router} from "@angular/router";
import {Image} from "../models/image";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonces: Annonce[] = [];
  energies: string[] = [];
  makes: {make: string}[] = [];
  models: {model: string}[] = [];
  categories: {category: string}[] = [];
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

  public saveAnnonce(annonce: object): void {
    this.httpClient
      .post(GlobalConfig.saveAnnonceApiUrl, annonce).subscribe(
        () => {
          this.images = [];
          void this.route.navigate(['/offres']);
        },
        error => console.error('Failed to save announcement', error)
      );
  }

  public getUserAnnonces(): Observable<Annonce[]> {
    return this.httpClient.get<Annonce[]>(GlobalConfig.getUserAnnoncesApiUrl).pipe(
      tap(value => this.annonces = value)
    );
  }

  public findAnnonceById(id: number): Observable<Annonce | null> {
    const currentAnnonce = this.annonces.find(annonce => annonce.id === id);
    if (currentAnnonce) {
      return of(currentAnnonce);
    }

    return this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl).pipe(
      map(annonces => {
        this.annonces = annonces;
        return annonces.find(annonce => annonce.id === id) ?? null;
      })
    );
  }

  public deleteAnnonce(selected_annonce: Annonce){
    this.httpClient.put<Annonce[]>(GlobalConfig.deleteAnnonceApiUrl, selected_annonce).subscribe(value => {
      this.annonces = value;
    }, error => {
      console.dir(error);
    });
  }

  upload(image: File): void {
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
    this.httpClient.get<{make: string}[]>(GlobalConfig.getMakeListApi).subscribe(value => {
      this.makes = value;
    });
  }

  getModels(make: string) {
    let params = new HttpParams().set("make", make);
    this.httpClient.get<{model: string}[]>(GlobalConfig.getModelByMakeApi, {params: params}).subscribe(response => {
      this.models = response;
    });
  }

  getCategories() {
    this.httpClient.get<{category: string}[]>(GlobalConfig.getCategoryByModelApi).subscribe(value => {
      this.categories = value;
    });
  }

  showCompletDetail(id: number) {
    this.route.navigate(["/offres/", id]);
  }

  filterAnnonce(value: {[key: string]: unknown}): void {
    const criteria: string[] = [];
    const exactFilters: Array<[string, string]> = [
      ['make', 'make'],
      ['model', 'model'],
      ['category', 'category'],
      ['energy', 'energy']
    ];
    const rangeFilters: Array<[string, string]> = [
      ['minPrice', 'price>'],
      ['maxPrice', 'price<'],
      ['minHorsePower', 'horsePower>'],
      ['maxHorsePower', 'horsePower<'],
      ['minFiscalHorsePower', 'fiscalHorsePower>'],
      ['maxFiscalHorsePower', 'fiscalHorsePower<']
    ];

    for (const [field, key] of exactFilters) {
      const filterValue = value[field];
      if (filterValue !== null && filterValue !== undefined && String(filterValue).trim()) {
        criteria.push(`${key}:${String(filterValue).trim()}`);
      }
    }
    for (const [field, expression] of rangeFilters) {
      const filterValue = value[field];
      if (filterValue !== null && filterValue !== undefined && String(filterValue).trim()) {
        criteria.push(`${expression}${String(filterValue).trim()}`);
      }
    }

    let params = new HttpParams();
    if (criteria.length) {
      params = params.set('search', criteria.join(','));
    }
    const request = criteria.length
      ? this.httpClient.get<Annonce[]>(GlobalConfig.getAnnonceFilteredApiUrl, {params})
      : this.httpClient.get<Annonce[]>(GlobalConfig.getAnnoncesApiUrl);
    request.subscribe(response => {
      this.annonces = response;
    });
  }
}
