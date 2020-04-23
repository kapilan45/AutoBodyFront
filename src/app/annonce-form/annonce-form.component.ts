import { Component, OnInit } from '@angular/core';
import {Annonce} from '../annonce';
import {AnnonceService} from '../annonce.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent implements OnInit {

  annonce: Annonce;
  annonceService: AnnonceService;

  constructor() {
    this.annonce = new Annonce();
    this.annonceService = new AnnonceService();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.annonceService.save(this.annonce);
  }

  onDrop() {
    // TODO
  }

  onDrag(){
    // TODO
  }

}
