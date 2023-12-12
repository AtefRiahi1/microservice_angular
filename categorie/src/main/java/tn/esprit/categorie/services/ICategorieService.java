package tn.esprit.categorie.services;



import tn.esprit.categorie.entites.Categorie;

import java.util.List;

public interface ICategorieService {


    Categorie addCategorie(Categorie categorie);


    Categorie updateCategorie(Categorie categorie);


    List<Categorie> getAllCategorie();


    Categorie getCategorieByid(long id);


    boolean supprimerCategorie(long id);
}
