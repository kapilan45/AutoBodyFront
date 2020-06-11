import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  constructor() { }

  token: string;
  user: string;
  password: string;
  basicHeader: string; // computed from user+password

  setLoginResult(user: string, password: string) {
    console.log('setLoginResult ' + user)
    this.user = user;
    this.password = password;
    this.basicHeader = 'Basic ' + btoa(user + ':' + password);
  }

  logout() {
    console.log('logout')
    this.user = null;
    this.password = null;
    this.basicHeader = null;
  }

  getAuthHeader(): {} {
    if (this.token) {
      return {
        Authorization: 'Bearer ' + this.token
      };
    } else if (this.user && this.password) {
      return {
        Authorization: this.basicHeader
      };
    } else {
      return undefined;
    }
  }

}
