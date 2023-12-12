package tn.esprit.categorie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.categorie.entites.Categorie;
import tn.esprit.categorie.repositories.CategorieRepo;


import java.util.List;

@Service
public class CategorieServiceImpl implements  ICategorieService{

    @Autowired
    CategorieRepo categorieRepo;
    @Override
    public Categorie addCategorie(Categorie categorie) {
        return categorieRepo.save(categorie);
    }

    @Override
    public Categorie updateCategorie(Categorie categorie) {
        return categorieRepo.save(categorie);
    }

    @Override
    public List<Categorie> getAllCategorie() {
        return categorieRepo.findAll();
    }

    @Override
    public Categorie getCategorieByid(long id) {
        return categorieRepo.findById(id).orElse(null);
    }

    @Override
    public boolean supprimerCategorie(long id) {
        categorieRepo.deleteById(id);
        return !(categorieRepo.existsById(id));
    }
}
