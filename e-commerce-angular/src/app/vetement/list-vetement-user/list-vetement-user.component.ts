import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Vetement} from "../../models/vetement";
import {VetementService} from "../../services/vetement.service";


@Component({
  selector: 'app-list-vetement-user',
  templateUrl: './list-vetement-user.component.html',
  styleUrls: ['./list-vetement-user.component.css']
})
export class ListVetementUserComponent implements OnInit {
  listVetement: Vetement[] = [];

  constructor(private router: Router, private avtR: ActivatedRoute, private vetementS: VetementService) {

  }

  ngOnInit() {
    this.vetementS.getAllVetements().subscribe((data:Vetement[])=>this.listVetement=data);

  }

}
