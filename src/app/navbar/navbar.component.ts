import { Component, OnInit } from '@angular/core';
import {User} from "../Annonce/user";
import {GlobalConfig} from "../global-config";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userconnected: boolean;
  constructor() {
    this.userconnected = GlobalConfig.getConnectedUser();
  }

  ngOnInit() {
  }

}
