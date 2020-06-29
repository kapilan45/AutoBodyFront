import { Component } from '@angular/core';
import {AnnonceService} from "./Annonce/annonce.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage';
  constructor(private annonceService: AnnonceService) {
    annonceService.getEnergies();
    annonceService.getMakes();
    annonceService.getAnnonces();
    annonceService.getCategories();
  }
}
