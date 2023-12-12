import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {ListVoitureComponent} from "./voiture/list-voiture/list-voiture.component";
import {AddVoitureComponent} from "./voiture/add-voiture/add-voiture.component";
import {UpdateVoitureComponent} from "./voiture/update-voiture/update-voiture.component";
import {DetailVoitureComponent} from "./voiture/detail-voiture/detail-voiture.component";
import {ListClientVoitureComponent} from "./voiture/list-client-voiture/list-client-voiture.component";
import {LayoutComponent} from "./layout/layout.component";
import {ListproduitComponent} from "./produit/listproduit/listproduit.component";
import {AddproduitComponent} from "./produit/addproduit/addproduit.component";
import {UpdateproduitComponent} from "./produit/updateproduit/updateproduit.component";
import {ListproduitadminComponent} from "./produit/listproduitadmin/listproduitadmin.component";
import {DetailproduitComponent} from "./produit/detailproduit/detailproduit.component";
import {AjoutercategorieComponent} from "./categorie/ajoutercategorie/ajoutercategorie.component";
import {UpdatecategorieComponent} from "./categorie/updatecategorie/updatecategorie.component";
import {ListcategorieComponent} from "./categorie/listcategorie/listcategorie.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'voitures',component:ListVoitureComponent},
  {path:'add-voiture',component:AddVoitureComponent},
  {path:'update-voiture/:id',component:UpdateVoitureComponent},
  {path:'detail-voiture/:id',component:DetailVoitureComponent},
  {path:'list-voiture-client',component:ListClientVoitureComponent},
  {path:'dash-admin',component:LayoutComponent},
  { path: 'produits', component: ListproduitComponent },
  { path: 'addproduits', component: AddproduitComponent },
  { path: 'edit/:id', component: UpdateproduitComponent },
  { path: 'produitsadmin', component: ListproduitadminComponent },
  { path: 'produitdetail/:id', component: DetailproduitComponent },
  { path: 'ajouter', component: AjoutercategorieComponent },
  { path: 'modifiercategorie/:id', component: UpdatecategorieComponent },
  {path:'listcategorie',component:ListcategorieComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
