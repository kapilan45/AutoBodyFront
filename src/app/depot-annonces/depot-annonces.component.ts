import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
import {Annonce} from "../models/annonce";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-depot-annonces',
  standalone: false,
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonce: Annonce | null = null;
  annonceId: number | null = null;
  annonceForm!: FormGroup;
  currentYear = new Date().getFullYear();
  isMake = true;
  isModele = true;
  isCategory = true;

  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id');
    if (routeId !== null) {
      this.annonceId = Number(routeId);
      if (!Number.isInteger(this.annonceId) || this.annonceId <= 0) {
        void this.router.navigate(['/gestion_annonce']);
        return;
      }

      this.annonceService.getUserAnnonces().subscribe({
        next: annonces => {
          const annonce = annonces.find(item => item.id === this.annonceId);
          if (!annonce) {
            void this.router.navigate(['/gestion_annonce']);
            return;
          }
          this.isMake = this.isModele = this.isCategory = false;
          this.annonceService.images = annonce.images ?? [];
          this.initializeForm(annonce);
        },
        error: error => {
          console.error('Failed to load announcement for editing', error);
          void this.router.navigate(['/gestion_annonce']);
        }
      });
      return;
    }

    this.annonceService.images = [];
    this.initializeForm(new Annonce());
  }

  private initializeForm(annonce: Annonce): void {
    this.annonce = annonce;
    this.annonceForm = this.formBuilder.group({
      id: [annonce.id],
      make: [annonce.make, Validators.required],
      numberOfSeats: [annonce.numberOfSeats, [Validators.required, Validators.min(1), Validators.max(7)]],
      maxSpeed: [annonce.maxSpeed, Validators.min(0)],
      gearbox: [annonce.gearbox, Validators.required],
      numberOfDoor: [annonce.numberOfDoor, [Validators.required, Validators.min(1), Validators.max(7)]],
      reinforcedCluth: [annonce.reinforcedCluth],
      horsePower: [annonce.horsePower, [Validators.required, Validators.min(0)]],
      horsePowerSinceTheLatestModification: [annonce.horsePowerSinceTheLatestModification, [Validators.required, Validators.min(0)]],
      fiscalHorsePower: [annonce.fiscalHorsePower, [Validators.required, Validators.min(0)]],
      price: [annonce.price, [Validators.required, Validators.min(0)]],
      stage: [annonce.stage, [Validators.required, Validators.min(0), Validators.max(3)]],
      model: [annonce.model, Validators.required],
      year: [annonce.year, [Validators.required, Validators.min(1886), Validators.max(this.currentYear)]],
      mileage: [annonce.mileage, [Validators.required, Validators.min(0)]],
      mileageSince1stModification: [annonce.mileageSince1stModification, [Validators.required, Validators.min(0)]],
      category: [annonce.category, Validators.required],
      energy: [annonce.energy, Validators.required],
      fuelEconomy: [annonce.fuelEconomy, Validators.required],
      fuelEconomySinceTheLatestModification: [annonce.fuelEconomySinceTheLatestModification, Validators.required],
      localisation: [annonce.localisation, Validators.required],
      outSideColor: [annonce.outSideColor, Validators.required],
      firstHand: [annonce.firstHand],
      inSideColor: [annonce.inSideColor, Validators.required],
      highPerformanceTuningCompany: [annonce.highPerformanceTuningCompany, Validators.required],
      publishedDate: [annonce.publishedDate],
      trim: [annonce.trim, Validators.required],
      driveType: [annonce.driveType, Validators.required],
      torque: [annonce.torque, [Validators.required, Validators.min(0)]],
      torqueSinceTheLatestModification: [annonce.torqueSinceTheLatestModification, [Validators.required, Validators.min(0)]],
      exaust: [annonce.exaust],
      turbo: [annonce.turbo],
      airAdmission: [annonce.airAdmission],
      dumpValve: [annonce.dumpValve],
      airFilter: [annonce.airFilter],
      options: [annonce.options],
      intercooler: [annonce.intercooler],
      images: [annonce.images]
    });
  }

  uploadImage(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files?.length) {
      const [file] = files;
      if (!file) {
        return;
      }
      this.annonceService.upload(file);
    }
  }

  deposerAnnonce() {
    this.annonceForm.patchValue({images: this.annonceService.images});
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  activateChamp() {
      this.annonceService.getModels(this.annonceForm.value.make);
      this.isMake = false;
  }


}
