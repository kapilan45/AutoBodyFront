import { Component, OnInit } from '@angular/core';
import {Annonce} from '../Annonce/annonce';
import {HttpClient} from '@angular/common/http';
import {GlobalConfig} from '../global-config';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';
<<<<<<< HEAD
import {Router} from '@angular/router';
import {AnnonceService} from '../Annonce/annonce.service';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.scss']
})
export class GestionAnnoncesComponent implements OnInit {

<<<<<<< HEAD
 // annonces: Annonce;
   annonces = [
    {
      prix: 400,
      stage: 2,
      marque: 'BMW',
      modele: 'X5',
      annee: 2005,
      kilometrage: 14000,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      prix: 880,
      stage: 2,
      marque: 'BMW',
      modele: 'X2',
      annee: 2050,
      kilometrage: 100,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    },
    {
      prix: 40,
      stage: 2,
      marque: 'BMW',
      modele: 'X2',
      annee: 2105,
      kilometrage: 10,
      categorie: 'break',
      energie: 'essence',
      localisation: 'paris',
      image: 'https://www.automobile-propre.com/wp-content/uploads/2020/01/sony-vision-s-01.jpg'
    }
  ];

  constructor(private httpClient: HttpClient, private annonceService: AnnonceService, private router: Router) { }

  ngOnInit() {
    this.annonceService.getAnnonces();
=======
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
>>>>>>> origin/master
  }

  modifier(annonce: Annonce) {
  // TODO
<<<<<<< HEAD
    this.annonceService.annonces = annonce;
    console.dir(annonce);
    console.log(annonce.id);
    this.router.navigate(['/modify']);
  }

  supprimer(annonce: Annonce) {
    // TODO affichage de modal de confirmation
    console.dir(annonce);
    this.httpClient.post(GlobalConfig.supprimerAnnonceApiUrl, annonce).subscribe(() => {
      console.log('suppression réussi');
    }, error => {
      console.log('erreur de suppression');
    });
    // this.modal.open(ModalConfirmComponent);
=======
    console.dir(annonce);
    console.log(annonce.id);
  }

  supprimer(annonce: Annonce) {
    // TODO
    console.dir(annonce);
    //this.modal.open(ModalConfirmComponent);
>>>>>>> origin/master
  }

}
