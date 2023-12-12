import { Component } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Router} from "@angular/router";
import {VoitureService} from "../../services/voiture.service";

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent {
  produit: any = {}; // Object to hold the product data
  image: string ="";
  onUploadImg(event:any):void{
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    this.image = file.name;
    const formData=new FormData();
    formData.append('file',file,file.name);
    this.voitureService.upload(formData).subscribe(
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

  constructor(private http: HttpClient,private router:Router,private voitureService:VoitureService) {}

  addProduit() {
    // Make a POST request to the backend API to create the product
    // Include the selected image name as part of the request
    const productData = {
      ...this.produit,
      image: this.image
    };

    this.http.post('http://localhost:9099/produits', productData)
      .subscribe(
        response => {
          console.log('Product created successfully!');
          // Clear the form or perform any other actions
          this.router.navigate(['/produitsadmin']);
        },
        error => {
          console.error('Error creating product:', error);
          // Handle the error
        }
      );
  }


}
