import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {VetementService} from "../../services/vetement.service";
import {Vetement} from "../../models/vetement";
import {VoitureService} from "../../services/voiture.service";


@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent {
  idV!: number;
  vetement!: Vetement;
  image: string ="";


  constructor(
    private actvtR: ActivatedRoute,
    private vetementS: VetementService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private voitureservice:VoitureService
  ) {

  }

  updateForm = this.formBuilder.group({
    idV: [0],
    type: ['', [Validators.required]],
    couleur: ['', [Validators.required]],
    taille: ['', [Validators.required]],
    marque: ['', [Validators.required]],
    saison: ['', [Validators.required]],
    sexe: ['', [Validators.required]],
    prix: [0, [Validators.required]],
    image:this.image
      // Assurez-vous que l'initialisation est correcte ici
  });
  ngOnInit(): void {
    this.getParam();
    this.getVetement();
  }

  getParam() {
    this.actvtR.paramMap.subscribe((data) => {
      this.idV = Number(data.get('id'));
    });
  }

  getVetement() {
    this.vetementS.getVetementById(this.idV).subscribe((data) => {
      this.vetement = data;
      this.updateForm.setValue({
        idV: this.vetement.idV,
        type: this.vetement.type,
        couleur: this.vetement.couleur,
        taille:this.vetement.taille,
        marque:this.vetement.marque,
        saison:this.vetement.saison,
        sexe:this.vetement.sexe,
        prix:this.vetement.prix,
        image:this.vetement.image
      });
    });
  }

  update() {
    const updatedVetement: Vetement = {
      idV: this.idV,
        type: <string>this.updateForm.value.type,
        couleur:  <string>this.updateForm.value.couleur,
        taille: <string>this.updateForm.value.taille,
        marque: <string>this.updateForm.value.marque,
        saison: <string>this.updateForm.value.saison,
        sexe: <string>this.updateForm.value.sexe,
        prix:<number>this.updateForm.value.prix,
        image: this.image
    };

    this.vetementS.updateVetement(updatedVetement).subscribe(() => {
      this.router.navigate(['/vetements']);
    });
  }

  onUploadImg(event:any):void{
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    this.image = file.name;
    const formData=new FormData();
    formData.append('file',file,file.name);
    this.voitureservice.upload(formData).subscribe(
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
