import {Image} from './image';

export class Annonce {
    id: number;
    make: string;
    numberOfSeats: number;
    maxSpeed: number;
    gearbox: string;
    numberOfDoor: number;
    numberOfPlaces: number;
    reinforcedCluth: boolean;
    horsePower: number;
    horsePowerSinceTheLatestModification: number;
    fiscalHorsePower: number;
    price: number;
    stage: number;
    model: string;
    year: Date;
    mileage: number;
    mileageSince1stModification: number;
    category: string;
    energy: string;
    fuelEconomy: string;
    fuelEconomySinceTheLatestModification: string;
    localisation: string;
    outSideColor: string;
    firstHand: boolean;
    euroNorme: string;
    co2: number;
    inSideColor: string;
    intercooler: string;
    highPerformanceTuningCompany: string;
    publishedDate: Date;

    airfilter: string;
    trim: string;
    driveType: string;
    torque: number;
    torqueSinceTheLatestModification: number;
    exaust: string;
    turbo: string;
    airAdmission: string;
    dumpValve: string;
    airFilter: string;
    options: string;

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
