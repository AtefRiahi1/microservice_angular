import { Component } from '@angular/core';
import {HttpEventType} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";


@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {
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



  addForm = new FormGroup({
    modele: new FormControl('', [Validators.required, Validators.minLength(2)]),
    marque: new FormControl('', [Validators.required, Validators.minLength(3)]),
    anneeFabrication: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    prix: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private voitureService:VoitureService ) { }

  add() {
    const voiture: Object = {
      modele: this.addForm.value.modele || '', // Default to empty string if null
      marque: this.addForm.value.marque || '',
      anneeFabrication: Number(this.addForm.value.anneeFabrication) || 0, // Adjust type conversion as needed
      image: this.image || '',
      prix:Number( this.addForm.value.prix )|| 0,
      description: this.addForm.value.description || '',
    };

    this.voitureService.add(voiture).subscribe(
      (response: any) => {
        this.router.navigate(['/voitures']);
      }
    );
  }

}
