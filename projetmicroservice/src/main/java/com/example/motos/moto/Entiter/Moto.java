package com.example.motos.moto.Entiter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "motos")
public class Moto {
    @Id
    private String id;
    private String marque;
    private String modele;
    private String prix;
    private String anneeFabrication;

    private String image; // Nouvel attribut ajouté pour l'image

    // Constructeurs, getters et setters

    public Moto() {
        this.id = new org.bson.types.ObjectId().toString();
    }

    public Moto(String marque, String modele,String anneeFabrication, String prix, String image) {
        this.id = new org.bson.types.ObjectId().toString();
        this.marque = marque;
        this.modele = modele;
        this.anneeFabrication = anneeFabrication;
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

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getPrix() {
        return prix;
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getAnneeFabrication() {
        return anneeFabrication;
    }

    public void setAnneeFabrication(String anneeFabrication) {
        this.anneeFabrication = anneeFabrication;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}