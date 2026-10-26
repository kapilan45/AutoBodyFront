import { Component, OnInit } from '@angular/core';
import {AuthStorageService} from "../Services/auth-storage.service";
import {AuthentificationService} from "../Services/authentification.service";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [RouterLink, CommonModule]
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  navOpen = false;

  constructor(private auth: AuthStorageService, private authentificationService: AuthentificationService) { }

  ngOnInit() {
  }


  logout() {
    this.menuOpen = false;
    this.authentificationService.logout();
  }
}
