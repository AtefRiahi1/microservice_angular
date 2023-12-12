package tn.esprit.categorie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.categorie.entites.Categorie;
import tn.esprit.categorie.services.CategorieServiceImpl;


import java.util.List;

@RestController
@RequestMapping("categorie")
public class CategorieController {

    @Autowired
    CategorieServiceImpl categorieService;

    @PostMapping("")
    public Categorie addCategorie(@RequestBody Categorie categorie){
       return categorieService.addCategorie(categorie);
    }

    @PutMapping("")
    public  Categorie updateCategorie(@RequestBody Categorie categorie){
        return categorieService.updateCategorie(categorie);
    }

    @GetMapping("")
    public List<Categorie> getAllCategorie(){
        return categorieService.getAllCategorie();
    }


    @GetMapping("{id}")
    public  Categorie getCategorieById(@PathVariable long id) {
        return  categorieService.getCategorieByid(id);
    }

    @DeleteMapping("{id}")
    public boolean supprimerCategorie(@PathVariable long id){
        return categorieService.supprimerCategorie(id);
    }
}
