import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {PieceService} from "../../services/piece.service";
import {Pieces} from "../../models/pieces";
import {HttpEventType} from "@angular/common/http";
import {VoitureService} from "../../services/voiture.service";





@Component({
  selector: 'app-add-pieces',
  templateUrl: './add-pieces.component.html',
  styleUrls: ['./add-pieces.component.css']
})
export class AddPiecesComponent {
  image: string ="";
  // Déclaration de la propriété addForm à l'intérieur de la classe
  addForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    prix: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    image: new FormControl('')
  });

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


  constructor(private router: Router, private piecesservice: PieceService, private voitureService:VoitureService) {}

  addP() {
    if (this.addForm.valid) {
      const piece: Pieces = {
        id: 0,
        title: this.addForm.value.title || '',
        description: this.addForm.value.description || '',
        prix: Number(this.addForm.value.prix) || 0,
        image: this.image|| '',
      };

      this.piecesservice.addPiece(piece).subscribe(
        () => {
          alert('Pièce ajoutée avec succès');
          this.router.navigate(['/pieces']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la pièce :', error);
          // Gérez l'erreur de manière appropriée (affichage d'un message d'erreur, journalisation, etc.)
        }
      );
    }
  }


}
