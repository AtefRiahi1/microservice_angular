export class Categorie {

    idCategorie?: number;
    nomCategorie!: string;

    constructor(idCategorie: number, nomCategorie: string) {
        this.idCategorie = idCategorie;
        this.nomCategorie = nomCategorie;
      }
}
