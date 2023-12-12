import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListVoitureComponent } from './voiture/list-voiture/list-voiture.component';
import { DetailVoitureComponent } from './voiture/detail-voiture/detail-voiture.component';
import { AddVoitureComponent } from './voiture/add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './voiture/update-voiture/update-voiture.component';
import { ListClientVoitureComponent } from './voiture/list-client-voiture/list-client-voiture.component';
import { LayoutComponent } from './layout/layout.component';
import {AddproduitComponent} from "./produit/addproduit/addproduit.component";
import {ListproduitadminComponent} from "./produit/listproduitadmin/listproduitadmin.component";
import {UpdateproduitComponent} from "./produit/updateproduit/updateproduit.component";
import {DetailproduitComponent} from "./produit/detailproduit/detailproduit.component";
import {ListproduitComponent} from "./produit/listproduit/listproduit.component";
import {ListcategorieComponent} from "./categorie/listcategorie/listcategorie.component";
import {AjoutercategorieComponent} from "./categorie/ajoutercategorie/ajoutercategorie.component";
import {UpdatecategorieComponent} from "./categorie/updatecategorie/updatecategorie.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListVoitureComponent,
    DetailVoitureComponent,
    AddVoitureComponent,
    UpdateVoitureComponent,
    ListClientVoitureComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ListproduitComponent,
    ListproduitadminComponent,
    DetailproduitComponent,
    ListcategorieComponent,
    AjoutercategorieComponent,
    UpdatecategorieComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['http://localhost:9097/.*'], // Utilisation d'une expression régulière
          sendAccessToken: true
        }
      }),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
