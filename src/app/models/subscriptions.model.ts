export class Subscription {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    prix: number;
    statusPaiement: boolean;
    etatSanteF: boolean;
  
    constructor(
      id: number,
      dateDebut: Date,
      dateFin: Date,
      prix: number,
      statusPaiement: boolean,
      etatSanteF: boolean
      
    ) {
      this.id = id;
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.prix = prix;
      this.statusPaiement = statusPaiement;
      this.etatSanteF = etatSanteF;
    }

  }