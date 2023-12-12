import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {HttpEventType} from "@angular/common/http";
import {VoitureService} from "../../services/voiture.service";


@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  productId!: string;
  product!: Produit;
  image: string ="";

  onUploadImg(event:any):void{
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    this.image = file.name;
    const formData=new FormData();
    formData.append('file',file,file.name);
    this.voitureservice.upload(formData).subscribe(
      (event:any)=>{
        if (event.type === HttpEventType.Response) {
          // Handle the final response
          this.image = event.body;
          console.log(this.image);
        }
      },
      (error) => {
        if (error.status === 400) {
          const errorMessage = error.error;
          console.log(errorMessage);
          alert(errorMessage);
        }
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
    private voitureservice:VoitureService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = String(params['id']);
      this.getProduct(this.productId.toString());
    });
  }

  getProduct(productId: string): void {
    this.produitService.getProduit(productId)
      .subscribe(product => this.product = product);
  }

  updateProduct(): void {
    this.produitService.updateProduit(this.product)
      .subscribe(() => {
        // On successful update, navigate to the product details page
        this.router.navigate(['/produitsadmin', this.productId]);
      }, error => {
        // Handle any error that occurred during the update process
        console.error('Error updating product:', error);
      });
  }
}
