package tn.esprit.voiture;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Document(collection = "voitures")
public class Voiture implements Serializable {
    @Id
    private String id;
    private String modele;
    private String marque;
    private int anneeFabrication;
    private double prix;
    private String description;
    private String image;
    private String nomCategorie;

    // Constructeurs, getters, setters

    public Voiture() {
        // Constructeur par défaut nécessaire pour MongoDB
        this.id = new org.bson.types.ObjectId().toString();
    }

    public Voiture(String modele, String marque, int anneeFabrication,String description,String image,String nomCategorie) {
        this.modele = modele;
        this.marque = marque;
        this.anneeFabrication = anneeFabrication;
        this.description = description;
        this.image = image;
        this.nomCategorie=nomCategorie;
        this.id = new org.bson.types.ObjectId().toString();
    }

    // Getters et Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public int getAnneeFabrication() {
        return anneeFabrication;
    }

    public void setAnneeFabrication(int anneeFabrication) {
        this.anneeFabrication = anneeFabrication;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNomCategorie() {
        return nomCategorie;
    }

    public void setNomCategorie(String nomCategorie) {
        this.nomCategorie = nomCategorie;
    }
}
