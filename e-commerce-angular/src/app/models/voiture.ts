export class Voiture {
  id!:string;
  modele!:string;
  marque!:string;
  anneeFabrication!:number;
  prix!:number;
  description!:string;
  image!:string;

  constructor(id: string, modele: string, marque: string, anneeFabrication: number, prix: number, description:string,image: string) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.anneeFabrication = anneeFabrication;
    this.prix = prix;
    this.image = image;
    this.description=description;
  }

}
