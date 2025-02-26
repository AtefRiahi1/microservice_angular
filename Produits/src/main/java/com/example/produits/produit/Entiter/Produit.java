package com.example.produits.produit.Entiter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;

@Document(collection = "produits")
public class Produit {
    @Id
    private String id;
    private String nom;
    private String description;
    private String prix;
    private String image; // Nouvel attribut ajouté pour l'image

    // Constructeurs, getters et setters

    public Produit() {
        this.id = new org.bson.types.ObjectId().toString();
    }

    public Produit(String nom, String description, String prix, String image) {
        this.id = new org.bson.types.ObjectId().toString();
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }

    // Getters et setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}