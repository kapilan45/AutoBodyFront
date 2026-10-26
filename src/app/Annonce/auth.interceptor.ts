import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthStorageService } from '../Services/auth-storage.service';
import {GlobalConfig} from '../global-config';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authStorage: AuthStorageService) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const authHeaders = this.authStorage.getAuthHeader();
		const registrationUrl = `${GlobalConfig.apiUrl}/security/register`;
		if (authHeaders && request.url.startsWith(`${GlobalConfig.apiUrl}/`) &&
			!request.url.startsWith(registrationUrl)) {
			return next.handle(request.clone({setHeaders: authHeaders}));
		}
		return next.handle(request);
	}
}
