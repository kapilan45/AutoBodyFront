import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import {AuthStorageService} from "../auth-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient, private auth: AuthStorageService) { }

  // Create user in database
  register(registerForm: FormGroup) {
    console.dir(registerForm.value);
    this.httpClient.post(GlobalConfig.registerApiUrl, registerForm.value).subscribe((response) => {
      console.log('registered');
      console.dir(response);
    }, error => {
      console.log('error to register');
    });
  }

  // log user after check id in database
  login(loginForm: FormGroup) {
    console.dir(loginForm.value);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post(GlobalConfig.loginApiUrl, loginForm.value, {headers: header, observe: 'response'}).subscribe(response => {
      let [token] = response.headers.get("cache-control").split(" ");

      if(token[1] != null){
        this.auth.setUserCredntial(token[1]);
        this.auth.setuserName(loginForm.value.username);
      }else {
        // TODO log error
        console.log("erreur de receprion de token");
      }


      }, error => {
      console.dir(error);
      console.log("erreur to log");
    });
  }
}
