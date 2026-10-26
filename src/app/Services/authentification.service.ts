import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap, map} from 'rxjs';
import {GlobalConfig} from '../global-config';
import {AuthStorageService} from './auth-storage.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient, private authStorageService: AuthStorageService) { }

  register(credentials: Pick<User, 'username' | 'password' | 'mail'>): Observable<User> {
    return this.httpClient.post<User>(GlobalConfig.registerApiUrl, credentials).pipe(
      switchMap(() => this.login({
        username: credentials.username,
        password: credentials.password
      }, false))
    );
  }

  login(credentials: Pick<User, 'username' | 'password'>, remember: boolean, returnUrl?: string | null): Observable<User> {
    return this.httpClient.post<User>(GlobalConfig.loginApiUrl, credentials, {observe: 'response'}).pipe(
      map(response => {
        const user = response.body;
        const token = response.headers.get('cache-control');
        if (!user || !token) {
          throw new Error('The login response did not contain a user and token.');
        }
        this.authStorageService.setLoginResult(user, token, remember, returnUrl);
        return user;
      })
    );
  }

  logout(): void {
    this.authStorageService.logout();
  }
}
