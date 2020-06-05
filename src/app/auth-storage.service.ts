import { Injectable } from '@angular/core';
import {User} from "./Annonce/user";

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private _UserCredntial: string;
  private _userName: string;
  private _cennectedStatus: boolean;

  constructor() { }


  getUserCredntial(): string {
    return this._UserCredntial;
  }

  setUserCredntial(value: string) {
    this._UserCredntial = value;
    this.setcennectedStatus(true);
  }

  getuserName(): string {
    return this._userName;
  }

  setuserName(value: string) {
    this._userName = value;
  }


  getcennectedStatus(): boolean {
    return this._cennectedStatus;
  }

  setcennectedStatus(value: boolean) {
    this._cennectedStatus = value;
  }
}
