
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpEvent, HttpEventType} from "@angular/common/http";
import { Location } from '@angular/common';
import {VetementService} from "../../services/vetement.service";
import {Vetement} from "../../models/vetement";
import {VoitureService} from "../../services/voiture.service";


@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent {
  addForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    couleur: new FormControl('', [Validators.required]),
    taille: new FormControl('', [Validators.required]),
    marque: new FormControl('', [Validators.required]),
    saison: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required]),

  });

  constructor(private vetementS: VetementService, private router: Router, private location: Location, private voitureService:VoitureService) {
    // ... Autres initialisations nécessaires ...
  }

  addVetement() {
    if (this.addForm.valid) {
        //const typeCValue = this.addForm.get('typeC').value;

        const vetement: Vetement = {
            idV: 0,
            type: String(this.addForm.value.type) || '',
            couleur:String(this.addForm.value.couleur) || '',
            taille: String(this.addForm.value.taille) || '',
            marque:String(this.addForm.value.marque) || '',
            saison: String(this.addForm.value.saison) || '',
            sexe: String(this.addForm.value.sexe) || '',
            prix:Number(this.addForm.value.prix) || 0,
            image:this.image || ''
        };
        this.vetementS.createVetement(vetement).subscribe(
            () => {
                alert("Vetement ajouté avec succès");
                this.router.navigate(['/vetements']);
            }
        );
      } else {
        alert("Veuillez remplir tous les champs correctement.");
    }

}
image: string ="";
  onUploadImg(event:any):void{
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    this.image = file.name;
    const formData=new FormData();
    formData.append('file',file,file.name);
    this.voitureService.upload(formData).subscribe(
      (event:any)=>{
        if (event.type === HttpEventType.Response) {
          // Handle the final response
          this.image = event.body;
          console.log(this.image);
        }
      },
      (error) => {
        if (error.status === 400) {
          const errorMessage = error.error;
          console.log(errorMessage);
          alert(errorMessage);
        }
      }
    );
  }

  isClicked: boolean = false;

  goBack(): void {
    this.location.back();
    this.isClicked = true;
  }

}
