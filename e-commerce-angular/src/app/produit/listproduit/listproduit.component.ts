import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
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

  /*exportpdf(): void {


    const tableData = [
      [{ text: 'Nom et Prenom ', bold: true }, `${user.nom} ${user.prenom}`],
      [{ text: 'Date de Naissance', bold: true }, user.dateNaissance],
      [{ text: 'Ecole', bold: true }, user.ecole],
      [{ text: 'Carte Cin', bold: true }, user.cin],
      [{ text: 'Email', bold: true }, user.email]
    ];

    const docDefinition = {
      content: [
        {
          columns: [
            {
              width: 'auto',
              text: 'Reservation',
              style: 'header'
            },
          ]
        },
        {

          text: `Reservation ID: ${rese.idReservation}`,
          style: 'subheader'
        },
        {
          text: `Year of Reservation: ${rese.anneeUniversitaire}`,
          style: 'subheader',
          margin: [0, 10, 0, 20]
        },
        {
          table: {
            widths: ['30%', '70%'],
            body: tableData
          },
          margin: [0, 0, 0, 20]
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('reservation_'+this.reservation.idReservation+'.pdf');
  }*/

}
