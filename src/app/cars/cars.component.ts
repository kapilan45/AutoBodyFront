import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import {Annonce} from "../Annonce/annonce";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  images: GalleryItem[];

  annonce = {
      id: 1,
      price: 1100,
      stage: 2,
      make: 'BMW',
      model: 'X5',
      year: 2005,
    gearbox: 'manuel',
      mileage: 14000,
      category: 'break',
      energy: 'essence',
      localisation: 'paris', numberOfSeats: 5, outSideColor: 'noir',
    fiscalHorsePower: 8, horsePower: 150, firstHand: true, euroNorme: 5, co2: 120, numberOfDoor: 4,
    inSideColor: 'gris'


  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    let annonceId = this.route.snapshot.params['annonceId'];
    console.log(annonceId);
    let annonces =

    this.images = [
      new ImageItem({
        src: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png",
        thumb: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png"
      }),
      new ImageItem({
        src: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png",
        thumb: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png"
      }), new ImageItem({
        src: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png",
        thumb: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png"
      }), new ImageItem({
        src: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png",
        thumb: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/e-class/saloon-w213/_jcr_content/image.MQ6.2.2x.20200128125812.png"
      }),
    ];
  }

}
