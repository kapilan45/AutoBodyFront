import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';
import {Image} from "../Annonce/image";
import {of} from "rxjs";
import {Annonce} from "../Annonce/annonce";
import {ENABLE_DISABLE_REGEX} from "tslint";

@Component({
  selector: 'app-depot-annonces',
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonceForm: FormGroup;
  energies = [];
  images = {};
  pjs = [
    {name: 'tele1.pdf'},
    {name: 'tele2.pdf'},
    {name: 'tele3.pdf'},
    ];
  makeslist = [];
  //images: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

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
  });


    this.energies = this.getEnergies();

    of(this.getEnergies()).subscribe(energies => {
      this.energies = energies;
    });

    of(this.getMake()).subscribe(make => {
      this.makeslist = make;
    });


  }

  getEnergies() {
    return [
      { value: 'Diesel' },
      { value: 'Essence' },
    ];
  }

  getMake() {
    return [
      {make: 'bmw'},
      {make: 'audi'}
    ];
  }

  getModele(annonceForm: FormGroup) {
    console.dir(annonceForm);
    console.dir(annonceForm.get(this.makeslist));
    return [
      {make: 'bmw'},
      {make: 'audi'}
    ];
  }

  deposerAnnonce() {
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }


  chargerImage(event) {

    //let tr = this.annonceService.upload(event);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        for (let i = 0; i < 6; i++){
          if (this.images[i] == null){
            this.images[i] = reader.result;
            break;
          }
        }

       // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
