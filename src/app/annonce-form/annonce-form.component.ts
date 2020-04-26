import { Component, OnInit } from '@angular/core';
import {Annonce} from '../Annonce/annonce';
import {AnnonceService} from '../Annonce/annonce.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Image} from "../Annonce/image";

@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent implements OnInit {

  annonceForm: FormGroup;
  energies = [];
  annonceService: AnnonceService;
  constructor(private formBuilder: FormBuilder, annonceService: AnnonceService) {
    this.annonceService = annonceService;
  }

  ngOnInit() {
    this.annonceForm = this.formBuilder.group({
      prix: [],
      stage: [],
      marque: [],
      image: ['https://cdn.motor1.com/images/mgl/AM0WL/s1/audi-s3-2020-pre-drive.jpg'],
      modele: [],
      annee: [],
      kilometrage: [],
      categorie: [],
      energies: [],
      localisation: [],
    });

    this.energies = this.getEnergies();
  }

  deposerAnnonce() {
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  getEnergies() {
    return [
      { energie: 'Diesel' },
      { energie: 'Essence' },
    ];
  }

  onDrop() {
    // TODO
  }

  onDrag(){
    // TODO
  }

}
