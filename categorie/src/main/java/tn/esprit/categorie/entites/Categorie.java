package tn.esprit.categorie.entites;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Categorie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCategorie;

    private String nomCategorie;

    public Categorie(String nomCategorie) {
        this.nomCategorie = nomCategorie;
    }
}
