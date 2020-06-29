import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
import {Annonce} from "../models/annonce";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-depot-annonces',
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonce: Annonce = null;
  annonceId = null;
  annonceForm: FormGroup;
  isMake = true;
  isModele = true;
  isCategory = true;
  attachements = [];

  // Reader read uploaded file
  reader = new FileReader();

  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.annonce = new Annonce();
    this.annonceId = this.route.snapshot.params['id'];
    if(this.annonceId != null){
        this.annonce = this.annonceService.annonces[this.annonceId];
        this.annonceService.images = this.annonce.images;
        this.isMake = this.isModele = this.isCategory = false;
    }

    this.annonceForm = this.formBuilder.group({
      id: [this.annonce.id],
      make: [this.annonce.make, Validators.required],
      numberOfSeats: [this.annonce.numberOfSeats, Validators.required],
      maxSpeed: [this.annonce.maxSpeed],
      gearbox: [this.annonce.gearbox, Validators.required],
      numberOfDoor: [this.annonce.numberOfDoor, Validators.required],
      reinforcedCluth: [this.annonce.reinforcedCluth],
      horsePower: [this.annonce.horsePower, Validators.required],
      horsePowerSinceTheLatestModification: [this.annonce.horsePowerSinceTheLatestModification, Validators.required],
      fiscalHorsePower: [this.annonce.fiscalHorsePower, Validators.required],
      price: [this.annonce.price, Validators.required],
      stage: [this.annonce.stage, Validators.required],
      model: [this.annonce.model, Validators.required],
      year: [this.annonce.year, Validators.required],
      mileage: [this.annonce.mileage, Validators.required],
      mileageSince1stModification: [this.annonce.mileageSince1stModification, Validators.required],
      category: [this.annonce.category, Validators.required],
      energy: [this.annonce.energy, Validators.required],
      fuelEconomy: [this.annonce.fuelEconomy, Validators.required],
      fuelEconomySinceTheLatestModification: [this.annonce.fuelEconomySinceTheLatestModification, Validators.required],
      localisation: [this.annonce.localisation, Validators.required],
      outSideColor: [this.annonce.outSideColor, Validators.required],
      firstHand: [this.annonce.firstHand],
      inSideColor : [this.annonce.inSideColor, Validators.required],
      highPerformanceTuningCompany: [this.annonce.highPerformanceTuningCompany, Validators.required],
      publishedDate: [this.annonce.publishedDate],
      trim: [this.annonce.trim, Validators.required],
      driveType: [this.annonce.driveType, Validators.required],
      torque: [this.annonce.torque, Validators.required],
      torqueSinceTheLatestModification: [this.annonce.torqueSinceTheLatestModification, Validators.required],
      exaust: [this.annonce.exaust],
      turbo: [this.annonce.turbo],
      airAdmission: [this.annonce.airAdmission],
      dumpValve: [this.annonce.dumpValve],
      airFilter: [this.annonce.airFilter],
      options: [this.annonce.options],
      intercooler: [this.annonce.intercooler],
      images: [this.annonce.images]
    });

  }

  uploadFichier(event) {
    if(event.target.files) {
      const [file] = event.target.files;
      this.reader.readAsDataURL(file);

      let uploadStat: any = this.annonceService.upload(file);

      if(!uploadStat) {
        let index = this.attachements.length;

        this.attachements[index] = {name : file.name};
      }
    }
  }

  uploadImage(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
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
