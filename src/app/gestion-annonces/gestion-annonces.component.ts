import { Component, OnInit } from '@angular/core';
import {Annonce} from '../models/annonce';
import {Router} from '@angular/router';
import {AnnonceService} from '../Annonce/annonce.service';
import {ModalService} from "../Services/modal.service";

@Component({
  selector: 'app-gestion-annonces',
  standalone: false,
  templateUrl: './gestion-annonces.component.html'
})
export class GestionAnnoncesComponent implements OnInit {

  selected_annonce: Annonce | null = null;

  constructor(private annonceService: AnnonceService, private router: Router, private modalService: ModalService) { }

  ngOnInit() {
    this.annonceService.getUserAnnonces().subscribe({
      error: error => console.error('Failed to load user announcements', error)
    });
  }

  modifier(annonceId: number) {
    void this.router.navigate(['/depot', annonceId]);
  }

  supprimer(annonce: Annonce): void {
    this.selected_annonce = annonce;
    this.modalService.open();
  }

  confirmSuppression(): void {
    if (!this.selected_annonce) {
      return;
    }
    this.annonceService.deleteAnnonce(this.selected_annonce);
    this.modalService.close();
    this.selected_annonce = null;
  }

  offreDetail(annonceId: number) {
    this.annonceService.showCompletDetail(annonceId);
  }
}
