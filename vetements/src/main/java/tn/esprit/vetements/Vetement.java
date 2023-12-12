package tn.esprit.vetements;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
@Entity
public class Vetement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idV;

    private String type;
    private String couleur;
    private String taille;
    private String marque;

    private String saison;
    private String sexe;
    private double prix;

    private String image;

    public Vetement() {
    }

    public Vetement(Long idV, String type, String couleur, String taille, String marque, String saison, String sexe, double prix, String image) {
        this.idV = idV;
        this.type = type;
        this.couleur = couleur;
        this.taille = taille;
        this.marque = marque;
        this.saison = saison;
        this.sexe = sexe;
        this.prix = prix;
        this.image = image;
    }
    public Vetement(String type, String couleur, String taille, String marque, String saison, String sexe, double prix, String image) {
        this.idV = idV;
        this.type = type;
        this.couleur = couleur;
        this.taille = taille;
        this.marque = marque;
        this.saison = saison;
        this.sexe = sexe;
        this.prix = prix;
        this.image = image;
    }

    public Long getIdV() {
        return idV;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCouleur() {
        return couleur;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    public String getTaille() {
        return taille;
    }

    public void setTaille(String taille) {
        this.taille = taille;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getSaison() {
        return saison;
    }

    public void setSaison(String saison) {
        this.saison = saison;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
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
}
