package tn.esprit.pieces.entities;

import javax.persistence.*;

@Entity
@Table(name = "Pieces")
public class Pieces {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private String title;


    private String description;


    private float prix;


    private String image;


    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public float getPrix() {
        return prix;
    }

    public String getImage() {
        return image;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public Pieces(String title, String description, float prix, String image) {
        this.title = title;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Pieces(long id, String title, String description, float prix, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }

    public Pieces() {
    }

}
