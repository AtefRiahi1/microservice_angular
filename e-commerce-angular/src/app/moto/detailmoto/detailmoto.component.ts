import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import { NgxQrcodeElementTypes } from 'ngx-qrcode2';
import {Moto} from "../../models/moto";
import {MotoService} from "../../services/moto.service";

@Component({
  selector: 'app-detailmoto',
  templateUrl: './detailmoto.component.html',
  styleUrls: ['./detailmoto.component.css']
})
export class DetailmotoComponent implements OnInit {

  qrType: NgxQrcodeElementTypes = NgxQrcodeElementTypes.URL;
  qrValue: string = 'https://www.google.com/search?q=chatgpt&rlz=1CDGOYI_enTN1085TN1085&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQwzMDMyMzU2N2owajeoAgiwAgE&hl=fr&sourceid=chrome-mobile&ie=UTF-8';
  motoId!: string;
  moto!: Moto;

  constructor(
    private route: ActivatedRoute,
    private motoService: MotoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.motoId = String(params['id']);
      this.getMoto(this.motoId);
    });
  }

  getMoto(motoId: string): void {
    this.motoService.getMoto(motoId)
      .subscribe(moto => this.moto = moto);
  }
}
