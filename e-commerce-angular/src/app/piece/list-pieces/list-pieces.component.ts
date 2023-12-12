import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PieceService} from "../../services/piece.service";
import {Pieces} from "../../models/pieces";



@Component({
  selector: 'app-list-pieces',
  templateUrl: './list-pieces.component.html',
  styleUrls: ['./list-pieces.component.css']
})
export class ListPiecesComponent {

  constructor(private Router:Router,private piecesservice:PieceService){}
  listFoyer:Pieces[]=[];

ngOnInit(){
  this.piecesservice.getAllPieces().subscribe((data:Pieces[])=>this.listFoyer=data);
}

delete(idP: number) {
  const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce foyer ?");

  if (confirmDelete) {
    this.piecesservice.deleteP(idP).subscribe(() => {
      alert("Piece supprimé");
      location.reload()
    });
  } else {

    alert("Suppression annulée");
  }
}
}
