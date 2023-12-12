import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Categorieservice} from "../../services/categorieservice";
import {Categorie} from "../../models/categorie";


@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent {

  constructor(private Router: Router, private categories: Categorieservice) {}

  listCategorie: Categorie[] = [];

  ngOnInit() {
    this.categories.getAllCategorie().subscribe(
      (categorie) => {
        this.listCategorie = categorie;
      },

    );

  }

  modifierCategorie(id: number | undefined) {
    // Check if the ID is defined before navigating
    if (id !== undefined) {
      // Navigate to the modifiercategorie page with the category ID
      this.Router.navigate(['/modifiercategorie', id]);
    }
  }
  supprimerCategorie(id: number) {
    // Call your service to delete the category
    this.categories.deleteCategorie(id).subscribe(()=>{
      this.Router.navigate(['/listcategorie']);}
    );
  }

}
