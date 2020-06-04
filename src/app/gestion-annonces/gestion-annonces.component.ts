import { Component, OnInit } from '@angular/core';
import {Annonce} from '../Annonce/annonce';
import {HttpClient} from '@angular/common/http';
import {GlobalConfig} from '../global-config';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';
import {Router} from '@angular/router';
import {AnnonceService} from '../Annonce/annonce.service';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.scss']
})
export class GestionAnnoncesComponent implements OnInit {

  // annonce à supprimer
  selected_annonce;

  deleteStat = "en debut";

 // annonces: Annonce;
   annonces = [
    {
      id: 0,
      price: 400,
      stage: 2,
      make: 'BMW',
      model: 'X5',
      year: 2005,
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      id: 1,
      price: 880,
      stage: 2,
      make: 'BMW',
      model: 'X2',
      year: 2050,
      mileage: 100,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      id: 2,
      price: 40,
      stage: 2,
      make: 'BMW',
      model: 'X2',
      year: 2105,
      mileage: 10,
      category: 'break',
      energy: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    }
  ];

  constructor(private httpClient: HttpClient, private annonceService: AnnonceService, private router: Router, private modalService: ModalService) { }

  ngOnInit() {
    this.annonceService.getUserAnnonces();
  }

  modifier(annonce: Annonce) {
  // TODO
    this.annonceService.annonces = annonce;
    console.dir(annonce);
    console.log(annonce.id);
    this.router.navigate(['/form/3'],);
  }

  supprimer(content, annonce) {
    // TODO affichage de modal de confirmation
    this.selected_annonce = annonce;
    this.deleteStat = "en cours";
    this.modalService.open(content);


  }

  confirmSuppression(selected_annonce: any) {

    for(var i=selected_annonce.id; i<this.annonces.length -1; i++){
      this.annonces[selected_annonce.id] = this.annonces[selected_annonce.id + 1];
    }

    console.dir(this.annonces);
    console.log(this.deleteStat);
    console.log(selected_annonce.id);
    console.log(selected_annonce.make);
    console.log(selected_annonce.price);

    // TODO delete annonce in server
    /*    console.dir(annonce);
        this.httpClient.post(GlobalConfig.supprimerAnnonceApiUrl, annonce).subscribe(() => {
          console.log('suppression réussi');
        }, error => {
          console.log('erreur de suppression');
        });
        // this.modal.open(ModalConfirmComponent);
        console.dir(annonce);
        console.log(annonce.id); */

    // close modal
    this.modalService.close();
  }
}
