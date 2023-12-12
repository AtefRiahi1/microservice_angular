import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Pieces} from "../../models/pieces";
import {PieceService} from "../../services/piece.service";
import {HttpEventType} from "@angular/common/http";
import {VoitureService} from "../../services/voiture.service";


@Component({
  selector: 'app-update-pieces',
  templateUrl: './update-pieces.component.html',
  styleUrls: ['./update-pieces.component.css']
})
export class UpdatePiecesComponent {
  id!: number;
  piece!: Pieces;
  image: string ="";

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

  constructor(
    private avtR: ActivatedRoute,
    private pieceS: PieceService,
    private router: Router,
    private FormB: FormBuilder,
    private voitureservice:VoitureService

  ) {}

  updateForm: FormGroup = this.FormB.group({
    id: [''],
    title: [''],
    description: [''],
    prix:[''],
    image:['']
  });

  getParam() {
    this.avtR.paramMap.subscribe((data) => {
      this.id = Number(data.get('id'));
    });
  }

  ngOnInit(): void {
    this.getParam();

    this.pieceS.getPieceById(this.id).subscribe((data) => {
      this.piece = data;
      this.updateForm.setValue({
        id: this.piece.id,
        title: this.piece.title,
        description: this.piece.description,
        prix:this.piece.prix,
        image:this.piece.image
      });
    });
  }

  update() {
    const updatedFoyer: Pieces = {
      id: this.updateForm.value.idP,
      title: this.updateForm.value.title,
      description: this.updateForm.value.description,
      prix: this.updateForm.value.prix,
      image: <string>this.image,

    };

    this.pieceS.updateP(this.id,updatedFoyer).subscribe(() => {
      this.router.navigate(['/pieces']);
    });
  }

}
