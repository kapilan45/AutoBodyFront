import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }

  // Create user in database
  register(registerForm: FormGroup) {
    console.dir(registerForm.value);
    this.httpClient.post(GlobalConfig.registerApiUrl, registerForm.value).subscribe(() => {
      console.log('registered');
    }, error => {
      console.log('error to register');
    });
  }

  // log user after check id in database
  login(loginForm: FormGroup) {
    console.dir(loginForm.value);
    this.httpClient.post(GlobalConfig.loginApiUrl, loginForm.value).subscribe(response => {
      console.log("log success");
      console.dir(response);
    }, error => {
      console.log("erreur to log");
    });
  }
}
