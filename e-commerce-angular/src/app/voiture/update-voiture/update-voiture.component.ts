import { Component } from '@angular/core';
import {Voiture} from "../../models/voiture";
import {HttpEventType} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {VoitureService} from "../../services/voiture.service";

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent {
  image: string ="";
  id!:string;
  voiture!:Voiture;
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
  constructor(private router: Router,private actR:ActivatedRoute,private R:Router,private FormB:FormBuilder,private voitureservice:VoitureService) { }
  updateForm = this.FormB.group({
    id:[''],
    modele: ['', [Validators.required, Validators.minLength(2)]],
    marque: ['', [Validators.required, Validators.minLength(3)]],
    anneeFabrication: [0, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    prix: [0, [Validators.required]],
    image:this.image,
    description: ['', [Validators.required, Validators.minLength(3)]],
  });
  getParam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.actR.paramMap.subscribe(data=>this.id=String(data.get('id')));
  }
  ngOnInit() {
    this.getParam()
    this.voitureservice.detail(this.id).subscribe((data)=>{this.voiture=data;
      this.updateForm.setValue({
          id: this.voiture.id,
        modele: this.voiture.modele,
        marque: this.voiture.marque,
        anneeFabrication: this.voiture.anneeFabrication,
        prix: this.voiture.prix,
          image: this.voiture.image,
        description: this.voiture.description,
        }
      );
    });
  }

  update(){
    const updatedVoiture:Voiture={
      id: this.id,
      modele: <string>this.updateForm.value.modele,
      marque: <string>this.updateForm.value.marque,
      anneeFabrication: <number>this.updateForm.value.anneeFabrication,
      prix: <number>this.updateForm.value.prix,
      image: <string>this.image,
      description: <string>this.updateForm.value.description
    }
    this.voitureservice.update(updatedVoiture,this.id).subscribe(() => {

        this.router.navigate(['/voitures']);
      });
  }
}
