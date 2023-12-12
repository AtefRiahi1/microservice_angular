import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Moto} from "../../models/moto";
import {MotoService} from "../../services/moto.service";


@Component({
  selector: 'app-listmoto',
  templateUrl: './listmoto.component.html',
  styleUrls: ['./listmoto.component.css']
})
export class ListmotoComponent implements OnInit {
  motos: Moto[] = [];

  constructor(private motoService: MotoService,private router: Router) { }

  ngOnInit(): void {
    this.getMotos();
  }

  getMotos(): void {
    this.motoService.getAllMotos()
      .subscribe(motos => this.motos = motos);
  }

  deleteMoto(motoId: string) {
    this.motoService.deleteMoto(motoId.toString())
      .subscribe(() => {
        // On successful deletion, update the products array
        this.motos = this.motos.filter(moto => moto.id !== motoId.toString());
        this.ngOnInit();
      }, error => {
        // Handle any error that occurred during the deletion process
        console.error('Error deleting moto:', error);
      });
  }

}
