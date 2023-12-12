import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Categorieservice} from "../../services/categorieservice";


@Component({
  selector: 'app-ajoutercategorie',
  templateUrl: './ajoutercategorie.component.html',
  styleUrls: ['./ajoutercategorie.component.css'],
})
export class AjoutercategorieComponent {
  categorieForm: FormGroup;

  constructor(
    private categoriesService: Categorieservice,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.categorieForm = this.fb.group({
      nomCategorie: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ajouterCategorie() {
    // Check if the form is valid before submitting
    if (this.categorieForm.valid) {
      const newCategory = this.categorieForm.value;
      this.categoriesService.ajouterCategorie(newCategory).subscribe(
        (addedCategory) => {
          // Redirect to the category list or perform any other action after adding the category
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error adding category:', error);
        }
      );
    }
  }
}
