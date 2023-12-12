import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Categorie} from "../../models/categorie";
import {Categorieservice} from "../../services/categorieservice";


@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent {

  updateForm: FormGroup;
  categorie!: Categorie;

  constructor(
    private categoriesService: Categorieservice,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group({
      nomCategorie: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categorieId = +params['id'];
      this.categoriesService.getCategorieteById(categorieId).subscribe(
        (categorie: Categorie) => {
          this.categorie = categorie;
          this.updateForm.patchValue({
            nomCategorie: categorie.nomCategorie
          });
        },
        (error) => {
          console.error('Error fetching category details:', error);
        }
      );
    });
  }

  modifierCategorie() {
    const updatedCategory: Categorie = {
      idCategorie: this.categorie.idCategorie,
      nomCategorie: this.updateForm.value.nomCategorie
    };

    this.categoriesService.updatecategorie(updatedCategory).subscribe(
      () => {
        this.router.navigate(['/listcategorie']);
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }
}
