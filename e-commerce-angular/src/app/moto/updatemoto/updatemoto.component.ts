import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Moto} from "../../models/moto";
import {MotoService} from "../../services/moto.service";
import {HttpEventType} from "@angular/common/http";
import {VoitureService} from "../../services/voiture.service";

@Component({
  selector: 'app-updatemoto',
  templateUrl: './updatemoto.component.html',
  styleUrls: ['./updatemoto.component.css']
})
export class UpdatemotoComponent implements OnInit {
  motoId!: string;
  moto!: Moto;
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
    private route: ActivatedRoute,
    private router: Router,
    private motoService: MotoService,
    private voitureservice:VoitureService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.motoId = String(params['id']);
      this.getMoto(this.motoId.toString());
    });
  }

  getMoto(motoId: string): void {
    this.motoService.getMoto(motoId)
      .subscribe(moto => this.moto = moto);
  }

  updateMoto(): void {
    this.motoService.updateMoto(this.moto)
      .subscribe(() => {
        this.router.navigate(['/motosadmin']);
      }, error => {
        // Handle any error that occurred during the update process
        console.error('Error updating Moto:', error);
      });
  }
}
