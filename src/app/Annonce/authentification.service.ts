import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {GlobalConfig} from '../global-config';
import { Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient, private route: Router) { }

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
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.post(GlobalConfig.loginApiUrl, loginForm.value, {observe: 'response'}).subscribe(response => {
      var token = response.headers.get("cache-control").split(" ");

      if(token[1] != null){
        GlobalConfig.setCurrentUser(token[1], loginForm.value.username);
        this.route.navigate(['/offres']);
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
