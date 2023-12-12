import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-listproduitadmin',
  templateUrl: './listproduitadmin.component.html',
  styleUrls: ['./listproduitadmin.component.css']
})
export class ListproduitadminComponent {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService,private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getAllProduits()
      .subscribe(produits => this.produits = produits);
  }

  deleteProduit(productId: string) {
    this.produitService.deleteProduit(productId.toString())
      .subscribe(() => {
        // On successful deletion, update the products array
        this.produits = this.produits.filter(produit => produit.id !== productId.toString());
        this.ngOnInit();
      }, error => {
        // Handle any error that occurred during the deletion process
        console.error('Error deleting product:', error);
      });
  }


}
