import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
import {Annonce} from "../Annonce/annonce";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

@Component({
  selector: 'app-depot-annonces',
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonceForm: FormGroup;
  isMake = true;
  isModele = true;
  isCategory = true;

  energies: any = [];
  makeslist: any = [];
  categorieslist: Object = [];
  modelslist: Object = [];
  images = [];
  attachements = [];


  // Reader read uploaded file
  reader = new FileReader();

  // images: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit() {
    let annonce: Annonce = new Annonce();

    let annonceId = this.route.snapshot.params['id'];
    if(annonceId != null){
      if(annonceId == this.annonceService.annonce.id){
        annonce = this.annonceService.annonce;
        this.isMake = this.isModele = this.isCategory = false;
      }
    }

    this.annonceForm = this.formBuilder.group({
      id: [annonce.id],
      make: [annonce.make],
      numberOfSeats: [annonce.numberOfSeats],
      maxSpeed: [annonce.maxSpeed],
      gearbox: [annonce.gearbox],
      numberOfDoor: [annonce.numberOfDoor],
      reinforcedCluth: [annonce.reinforcedCluth],
      horsePower: [annonce.horsePower],
      horsePowerSinceTheLatestModification: [annonce.horsePowerSinceTheLatestModification],
      fiscalHorsePower: [annonce.fiscalHorsePower],
      price: [annonce.price],
      stage: [annonce.stage],
      model: [annonce.model],
      year: [annonce.year],
      mileage: [annonce.mileage],
      mileageSince1stModification: [annonce.mileageSince1stModification],
      category: [annonce.category],
      energy: [annonce.energy],
      fuelEconomy: [annonce.fuelEconomy],
      fuelEconomySinceTheLatestModification: [annonce.fuelEconomySinceTheLatestModification],
      localisation: [annonce.localisation],
      outSideColor: [annonce.outSideColor],
      firstHand: [annonce.firstHand],
      euroNorme: [annonce.euroNorme],
      co2: [annonce.co2],
      inSideColor : [annonce.inSideColor],
      intercooler: [annonce.intercooler],
      highPerformanceTuningCompany: [annonce.highPerformanceTuningCompany],
      publishedDate: [annonce.publishedDate],
      trim: [annonce.trim],
      driveType: [annonce.driveType],
      torque: [annonce.torque],
      torqueSinceTheLatestModification: [annonce.torqueSinceTheLatestModification],
      exaust: [annonce.exaust],
      turbo: [annonce.turbo],
      airAdmission: [annonce.airAdmission],
      dumpValve: [annonce.dumpValve],
      airFilter: [annonce.airFilter],
      options: [annonce.options],
      image: []
    });

    this.energies = this.annonceService.getEnergies();
    this.makeslist = this.annonceService.getMakes();

  }

  uploadFichier(event) {
    if(event.target.files) {
      const [file] = event.target.files;
      this.reader.readAsDataURL(file);

      let uploadStat: any = this.annonceService.upload(file);

      if(!uploadStat) {
        let index = this.attachements.length;

        // TODO
        this.attachements[index] = {name : file.name};
      }
    }
  }

  uploadImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.images[0] = reader.result;
      }

      // TODO erreur to upload
      // subscribe
      let uploadStat = this.annonceService.upload(file);
      console.dir(uploadStat);

      if(uploadStat){
        reader.onload = () => {
          let index = this.images.length;
          if (this.images.length != 6){
            this.images[index] = reader.result;
            /* for (let i = 0; i < 6; i++){
              if (this.images[i] == null){
                this.images[i] = reader.result;
                break;
              }
            }*/
          } else {
            for (let i = 0; i < 5; i++){
              this.images[i] = this.images[i + 1];
            }
            this.images[5] = reader.result;
          }

          // need to run CD since file load runs outside of zone
          this.cd.markForCheck();
        };
      }


    }
  }

  getModeles(annonceForm: FormGroup) {
    return [
      {modele: 'x4'},
      {modele: 'x5'}
    ];
  }

  getCategories(annonceForm: FormGroup) {
    return [
      {category: 'break'},
      {category: 'citadin'}
    ];
  }

  deposerAnnonce() {
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  activateChamp(e: string) {
    if (e == 'make'){
      this.modelslist = this.annonceService.getModels(this.annonceForm.value.make);
      this.isMake = false;
    } else  if (e == 'model'){
      this.categorieslist = this.annonceService.getCategories(this.annonceForm.value.make, this.annonceForm.value.model);
      this.isModele = false;
    } else if (e == 'category'){
      this.isCategory = false;
    }

  }


}
