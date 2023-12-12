import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {PieceService} from "../../services/piece.service";
import {Pieces} from "../../models/pieces";


@Component({
  selector: 'app-all-pieces',
  templateUrl: './all-pieces.component.html',
  styleUrls: ['./all-pieces.component.css']
})
export class AllPiecesComponent {


  constructor(private Router:Router,private pieceservice:PieceService){}

listP:Pieces[]=[];

ngOnInit(){
  this.pieceservice.getAllPieces().subscribe((data:Pieces[])=>this.listP=data);
}

}
