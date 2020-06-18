import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../Annonce/annonce.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  constructor(private annonceService: AnnonceService, private route: Router) { }

  ngOnInit() {
    this.annonceService.getAnnonces();
    this.annonceService.getEnergies();

  }

  onSelectFilter(event: any) {
    //let val = event.target.id;
    let val = event.target.value;
    console.dir(event.target.value);
    console.log(val);

    this.annonceService.filter(event.target.id, event.target.value);
  }

  showCompletDetail(id: number) {
    // redirect to new routes
    this.route.navigate(["/offres/", id]);
  }

}
