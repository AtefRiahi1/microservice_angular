import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent {
  id!:string;
  voiture!:Voiture;
  constructor(private actR:ActivatedRoute,private voitureservice:VoitureService) { }
  getParam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.actR.paramMap.subscribe(data=>this.id=String(data.get('id')));
  }
  ngOnInit() {
    this.getParam()
    this.voitureservice.detail(this.id).subscribe((data)=>{this.voiture=data;
    });
  }
}
