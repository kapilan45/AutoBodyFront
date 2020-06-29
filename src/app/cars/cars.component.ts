import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import {Annonce} from "../models/annonce";
import {ActivatedRoute} from "@angular/router";
import {AnnonceService} from "../Annonce/annonce.service";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit {

  images: GalleryItem[] = [];

  annonce: Annonce;

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService) {
  }

  ngOnInit() {

    let annonceId = this.route.snapshot.params['annonceId'];
    this.annonce = this.annonceService.annonces[annonceId];

    for (let image in this.annonce.images){

      this.images[image] = new ImageItem({
        src: "data:image/png;base64," + this.annonce.images[image]['path'],
        thumb: "data:image/png;base64," + this.annonce.images[image]['path']
      });
    }


  }



}
