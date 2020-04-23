export class Annonce {
      prix: Int32Array;
      stage: Int8Array;
      marque: string;
      modele: string;
      annee: Int16Array;
      kilometrage: bigint;
      categorie: string;
      energie: string;
      localisation: string;
      image: [{
        image1: string,
        image2: string,
        image3: string,
        image4: string,
        image5: string,
        image6: string,
      }];
}
