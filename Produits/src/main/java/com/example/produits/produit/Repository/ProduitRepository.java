package com.example.produits.produit.Repository;

import com.example.produits.produit.Entiter.Produit;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends MongoRepository<Produit,String> {
}
