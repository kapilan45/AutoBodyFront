import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
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
  energies = [];
  images = [];
  pjs = [];

  makeslist = [];
  categorieslist = [];
  modeleslist = [];
  // Reader read uploaded file
  reader = new FileReader();

  // images: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    of(this.getEnergies()).subscribe(energies => {
      this.energies = energies;
    });

    of(this.getMakes()).subscribe(makes => {
      this.makeslist = makes;
    });

    this.annonceForm = this.formBuilder.group({
      placeNumber: [],
      maxSpeed: [],
      reinforcedCluth: [],
      horsePower: [],
      fiscalHorsePower: [],
      prix: [],
      stage: [],
      make: [],
      modele: [],
      annee: [],
      kilometrage: [],
      category: [],
      energies: [''],
      localisation: [],
      numberOfOwner: [],
      numberOfDoor: [],
      numberOfPlace: [],
      inSideColor: [],
      outSideColor: [],
      euroNorme: [],
      co2: [],
      firstHand: [],
      description: [],
  });

  }

  uploadFichier(event) {
    if(event.target.files) {
      const [file] = event.target.files;
      this.reader.readAsDataURL(file);

      let uploadStat: any = this.annonceService.upload(file);

      if(!uploadStat) {
        let index = this.pjs.length;

        // TODO
        this.pjs[index] = {name : file.name};
      }
    }
  }

  uploadImage(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      // TODO erreur to upload
      let uploadStat:boolean = this.annonceService.upload(file);

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

  getEnergies() {
    return [
      { value: 'Diesel' },
      { value: 'Essence' },
    ];
  }

  getMakes() {
    return [
      {marque: 'bmw'},
      {marque: 'audi'}
    ];
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
    console.dir(this.annonceForm)
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  activateChamp(e: string) {

    if (e == 'make'){
      of(this.getModeles(this.annonceForm)).subscribe(modeles => {
        this.modeleslist = modeles;
      });
      this.isMake = false;
    } else  if (e == 'modele'){
      of(this.getCategories(this.annonceForm)).subscribe(categories => {
        this.categorieslist = categories;
      });
      this.isModele = false;
    } else if (e == 'category'){
      this.isCategory = false;
    }

  }


}
