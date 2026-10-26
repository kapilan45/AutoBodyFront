import { Component, OnInit } from '@angular/core';
import {Annonce} from "../models/annonce";
import {ActivatedRoute} from "@angular/router";
import {AnnonceService} from "../Annonce/annonce.service";
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    imports: [CommonModule]
})
export class CarsComponent implements OnInit {

  images: string[] = [];

  annonce: Annonce | null = null;

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService, private router: Router) {
  }

  ngOnInit() {

    const annonceId = Number(this.route.snapshot.paramMap.get('annonceId'));
    if (!Number.isInteger(annonceId) || annonceId <= 0) {
      void this.router.navigate(['/offres']);
      return;
    }

    this.annonceService.findAnnonceById(annonceId).subscribe({
      next: annonce => {
        if (!annonce) {
          void this.router.navigate(['/offres']);
          return;
        }
        this.annonce = annonce;
        this.images = (annonce.images ?? []).map(image => `data:image/png;base64,${image.path}`);
      },
      error: error => {
        console.error('Failed to load announcement', error);
        void this.router.navigate(['/offres']);
      }
    });
  }
}
