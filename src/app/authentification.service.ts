import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }

  register(registerForm: FormGroup){

  }

  login(loginForm: FormGroup){}
}
