import {Image} from './image';

export class Annonce {
      id: number;
      placeNumber: number;
      maxSpeed: number;
      reinforcedCluth: boolean;
      horsePower: number;
      fiscalHorsePower: number;
      prix: number;
      stage: number;
      make: string;
      modele: string;
      annee: number;
      kilometrage: number;
      category: string;
      energie: string;
      localisation: string;
      image: Image;
}

/*

make = [{
  make: 'make'
}];
modele = [{
  modele: 'modele'
}];
annee: number;
kilometrage: number;
category: [{
  category: 'category'
}]
energie: string;
localisation = [{
  city: 'city'
}]; */
