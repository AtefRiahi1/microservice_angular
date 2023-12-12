import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {VetementService} from "../../services/vetement.service";
import {Vetement} from "../../models/vetement";


@Component({
  selector: 'app-list-vetement',
  templateUrl: './list-vetement.component.html',
  styleUrls: ['./list-vetement.component.css']
})
export class ListVetementComponent {
  constructor(private router:Router,private vetementService:VetementService){}
  listVetement:Vetement[]=[];

ngOnInit(){
  this.vetementService.getAllVetements().subscribe((data:Vetement[])=>this.listVetement=data);
}
delete(idV: number) {
  const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette chambre?");

  if (confirmDelete) {
    this.vetementService.deleteVetement(idV).subscribe(() => {
      alert("vetement supprimé avec succés ");
      location.reload();
      this.router.navigate(["/vetements"]);
    });
  } else {

    alert("Suppression annulée");
  }
}
}
