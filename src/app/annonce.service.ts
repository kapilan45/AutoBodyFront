import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from './annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl: string;
  private httpClient: HttpClient;
  constructor() {
    this.baseUrl = 'http://localhost:4200/api/annonce';
  }

  public findAll(): Observable<Annonce[]>{
    return this.httpClient.get<Annonce[]>(this.baseUrl);
  }

  public save(annonce: Annonce) {
   //TODO return this.httpClient.post<Annonce>(this.baseUrl, annonce);
  }
}



