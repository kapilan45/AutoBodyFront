import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from './annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:4200/api/annonce';
  }

  public findAll(): Observable<Annonce[]>{
    return this.httpClient.get<Annonce[]>(this.baseUrl);
  }

  public save(annonce: Annonce){
    return this.httpClient.post<Annonce>(this.baseUrl, annonce);
  }
}



