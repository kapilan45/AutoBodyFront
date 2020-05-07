import {Image} from './image';

export class Annonce {
      id: number;
      prix: number;
      stage: number;
      marque: string;
      modele: string;
      annee: number;
      kilometrage: number;
      categorie: string;
      energie: string;
      localisation: string;
      image: Image;
}
