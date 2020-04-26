import { Component, OnInit } from '@angular/core';
import {Annonce} from '../Annonce/annonce';
import {HttpClient} from '@angular/common/http';
import {GlobalConfig} from '../global-config';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.scss']
})
export class GestionAnnoncesComponent implements OnInit {

  annonces: Annonce;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Annonce>(GlobalConfig.getAnnoncesApiUrl).subscribe(value => {
      this.annonces = value;
      console.dir(value);
      console.dir(this.annonces);
    }, error => {
      console.log('Erreur' + error);
    });
  }

  modifier(annonce: Annonce) {
  // TODO
    console.dir(annonce);
    console.log(annonce.id);
  }

  supprimer(annonce: Annonce) {
    // TODO
    console.dir(annonce);
    //this.modal.open(ModalConfirmComponent);
  }

}
