import { Component } from '@angular/core';
import {Voiture} from "../../models/voiture";
import {VoitureService} from "../../services/voiture.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent {
  list:Voiture[]=[];
  search!:string;
  constructor(private voitureS:VoitureService,private router:Router) {
  }

  ngOnInit(){
    this.voitureS.list().subscribe((data)=>{
      this.list=data;
      console.log(data);
    });
  }
  delete(id:string){
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?");

    if (confirmDelete) {
    this.voitureS.delete(id).subscribe(()=>{
      alert("voiture supprimée")
      location.reload();
      this.router.navigate(["/voitures"])
    });
  }
    else {

      alert("Suppression annulée");
    }
  }

}
