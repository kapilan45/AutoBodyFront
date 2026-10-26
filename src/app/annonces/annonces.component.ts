import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../Annonce/annonce.service";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-annonces',
    templateUrl: './annonces.component.html',
    styleUrls: ['./annonces.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]
})
export class AnnoncesComponent implements OnInit {

  filtreForm!: FormGroup;
  basicFilter: {value: string}[] = [];
  constructor(private annonceService: AnnonceService, private formBuilder: FormBuilder) {
    this.getBasicFilter();
  }

  ngOnInit() {

    this.annonceService.getAnnonces();
    this.annonceService.getEnergies();
    this.annonceService.getMakes();
    this.annonceService.getCategories();

    this.filtreForm = this.formBuilder.group({
      make: [],
      model: [],
      category: [],
      energy: [],
      minYear: [],
      maxYear: [],
      minPrice: [],
      maxPrice: [],
      minFiscalHorsePower: [],
      maxFiscalHorsePower: [],
      minHorsePower: [],
      maxHorsePower: [],
      minMileage: [],
      maxMileage: [],
      minMileageSinceModification: [],
      maxMileageSinceModification: [],
      minFuelEconomy: [],
      maxFuelEconomy: [],
      minTorque: [],
      maxTorque: []
    });
  }

  onSelectFilter(event: any) {
    //let val = event.target.id;
    let val = event.target.value;
    console.dir(event.target.value);
    console.log(val);

    if(val == "croissant"){

    }else if (val == "decroissant"){

    }else if (val == "anciennes") {

    }else {
      // récentes
    }
     this.annonceService.filter(event.target.id, event.target.value);
  }

  showCompletDetail(id: number) {
    this.annonceService.showCompletDetail(id);
  }

  getBasicFilter() {
    this.basicFilter = [
      {value: 'recentes'},
      {value: 'anciennes'},
      {value: 'decroissant'},
      {value: 'croissant'}
    ];
  }

  filterAnnonce() {
    this.annonceService.filterAnnonce(this.filtreForm.value);
  }

  onMakeChange(): void {
    const make = this.filtreForm.get('make')?.value;
    if (make) {
      this.annonceService.getModels(make);
    }
  }


}
