import { Component, OnInit } from '@angular/core';
import {Annonce} from '../models/annonce';
import {Router} from '@angular/router';
import {AnnonceService} from '../Annonce/annonce.service';
import {ModalService} from "../Services/modal.service";

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html'
})
export class GestionAnnoncesComponent implements OnInit {

  selected_annonce;

  constructor(private annonceService: AnnonceService, private router: Router, private modalService: ModalService) { }

  ngOnInit() {
    this.annonceService.getUserAnnonces();
  }

  modifier(annonce: number) {
    this.router.navigate(['/depot', annonce],);
  }

  supprimer(content, annonce: Annonce) {
    this.selected_annonce = annonce;
    this.modalService.open(content);


  }

  confirmSuppression() {
    this.annonceService.deleteAnnonce(this.selected_annonce);
    this.modalService.close();
  }

  offreDetail(index: number) {
    this.annonceService.showCompletDetail(index);
  }
}
