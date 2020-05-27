import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../Annonce/annonce.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modification-annonces',
  templateUrl: './modification-annonces.component.html',
  styleUrls: ['./modification-annonces.component.scss']
})
export class ModificationAnnoncesComponent implements OnInit {

  annonceForm: FormGroup;
  energies = [];
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService) { }

  ngOnInit() {
  console.dir(this.annonceService.annonces);

  const annonce = this.annonceService.annonces;

  this.annonceForm = this.formBuilder.group({
      prix: [annonce.price],
      stage: [annonce.stage],
      make: [annonce.make],
      image: [annonce.image],
      modele: [annonce.model],
      annee: [annonce.annee],
      kilometrage: [annonce.kilometrage],
      category: [annonce.category],
      energies: [annonce.energie],
      localisation: [annonce.localisation],
    });
  this.energies = this.getEnergies();
  }

  getEnergies() {
    return [
      {energie: 'Diesel'},
      {energie: 'Essence'},
    ];
  }

  modifierAnnonce(){
    this.annonceService.modifyAnnonce(this.annonceForm);
  }

}
