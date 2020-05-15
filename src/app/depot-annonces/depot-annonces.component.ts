import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AnnonceService} from '../Annonce/annonce.service';

@Component({
  selector: 'app-depot-annonces',
  templateUrl: './depot-annonces.component.html',
  styleUrls: ['./depot-annonces.component.scss']
})
export class DepotAnnoncesComponent implements OnInit {

  annonceForm: FormGroup;
  energies = [];
  images = { }
  //images: string | ArrayBuffer;
  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.annonceForm = this.formBuilder.group({
    prix: [],
    stage: [],
    marque: [],
    image: ['https://cdn.motor1.com/images/mgl/AM0WL/s1/audi-s3-2020-pre-drive.jpg'],
    modele: [],
    annee: [],
    kilometrage: [],
    categorie: [],
    energies: [],
    localisation: [],
  });

    this.energies = this.getEnergies();
  }

  getEnergies() {
    return [
      { energie: 'Diesel' },
      { energie: 'Essence' },
    ];
  }

  deposerAnnonce() {
    this.annonceService.saveAnnonce(this.annonceForm.value);
  }

  chargerImage(event) {

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

        console.dir(reader.result);

       // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}
