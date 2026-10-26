import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from '../models/user';

interface StoredAuthentication {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  private readonly storageKey = 'autobody.authentication';

  constructor(private route: Router) {
    this.restoreRememberedSession();
  }

  token: string | null = null;
  user: string | null = null;

  setLoginResult(user: User, token: string, remember: boolean, returnUrl?: string | null): void {
    if (!user?.username || !token) {
      throw new Error('The authentication response did not contain a user and token.');
    }

    if (remember) {
      localStorage.setItem(this.storageKey, JSON.stringify({username: user.username, token}));
    } else {
      localStorage.removeItem(this.storageKey);
    }
    if (user.username !== this.storageKey) {
      localStorage.removeItem(user.username);
    }

    this.user = user.username;
    this.token = token;
    const destination = returnUrl?.startsWith('/') && !returnUrl.startsWith('//')
      ? returnUrl
      : '/offres';
    void this.route.navigateByUrl(destination);
  }

  isAuthenticated(): boolean {
    return !!this.user && !!this.token;
  }

  logout(): void {
    const legacyUsername = this.user;
    this.user = null;
    this.token = null;
    localStorage.removeItem(this.storageKey);
    if (legacyUsername && legacyUsername !== this.storageKey) {
      localStorage.removeItem(legacyUsername);
    }
    void this.route.navigate(['/offres']);
  }

  getAuthHeader(): Record<string, string> | null {
    if (this.token) {
      return {Authorization: this.token};
    } else {
      return null;
    }
  }

  private restoreRememberedSession(): void {
    const serialized = localStorage.getItem(this.storageKey);
    if (!serialized) {
      return;
    }

    let stored: StoredAuthentication;
    try {
      stored = JSON.parse(serialized) as StoredAuthentication;
    } catch (error) {
      if (!(error instanceof SyntaxError)) {
        throw error;
      }
      localStorage.removeItem(this.storageKey);
      return;
    }

    if (!stored || typeof stored !== 'object' ||
        typeof stored.username !== 'string' || !stored.username ||
        typeof stored.token !== 'string' || !stored.token) {
      localStorage.removeItem(this.storageKey);
      return;
    }

    this.user = stored.username;
    this.token = stored.token;
  }
}
