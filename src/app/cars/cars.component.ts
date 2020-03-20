import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  images: GalleryItem[];

  constructor() {
  }

  ngOnInit() {
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
