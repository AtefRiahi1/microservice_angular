import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";


@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  productId!: string;
  product!: Produit;

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = String(params['id']);
      this.getProduct(this.productId);
    });
  }

  getProduct(productId: string): void {
    this.produitService.getProduit(productId)
      .subscribe(product => this.product = product);
  }
}
