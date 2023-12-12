package com.example.produits.produit.Controller;
import com.example.produits.produit.Entiter.Produit;
import com.example.produits.produit.Repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produits")
@CrossOrigin("*")
public class ProduitController {
    private final ProduitRepository produitRepository;

    @Autowired
    public ProduitController(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    @GetMapping
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @PostMapping
    public Produit createProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @GetMapping("/{id}")
    public Produit getProduitById(@PathVariable String id) {
        return produitRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Produit updateProduit(@PathVariable String id, @RequestBody Produit produitDetails) {
        Produit produit = produitRepository.findById(id).orElse(null);
        if (produit != null) {
            produit.setNom(produitDetails.getNom());
            produit.setDescription(produitDetails.getDescription());
            produit.setPrix(produitDetails.getPrix());
            produit.setImage(produitDetails.getImage());
            return produitRepository.save(produit);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable String id) {
        produitRepository.deleteById(id);
    }
}
