import { Component } from '@angular/core';
import {VoitureService} from "../../services/voiture.service";
import {Router} from "@angular/router";
import {Voiture} from "../../models/voiture";

@Component({
  selector: 'app-list-client-voiture',
  templateUrl: './list-client-voiture.component.html',
  styleUrls: ['./list-client-voiture.component.css']
})
export class ListClientVoitureComponent {
  list:Voiture[]=[];
  constructor(private voitureS:VoitureService,private router:Router) {
  }

  ngOnInit(){
    this.voitureS.list().subscribe((data)=>{
      this.list=data;
      console.log(data);
    });
  }
}
