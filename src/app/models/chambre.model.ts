import { typeChambre } from "./typeChambre.model";

export interface Chambre {
    id : number;
    bloc : string;
    disponibilite : boolean;
    placeDisponible : number;
    typeChambre:  typeChambre;
  }
  