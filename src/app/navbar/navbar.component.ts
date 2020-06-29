import { Component, OnInit } from '@angular/core';
import {AuthStorageService} from "../Services/auth-storage.service";
import {AuthentificationService} from "../Services/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthStorageService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
  }


  logout() {
    this.authentificationService.logout();
  }
}
