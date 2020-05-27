import {Image} from './image';

export class Annonce {
      id: number;
      make: {
        make: string;
      };
      placeNumber: number;
      maxSpeed: number;
      reinforcedCluth: boolean;
      horsePower: number;
      fiscalHorsePower: number;
      price: number;
      stage: number;
      model: {
        model: string;
      };
      annee: number;
      kilometrage: number;
      category: {
        category: string;
      };
      energie: string;
      localisation: {
        city: string;
      };
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
