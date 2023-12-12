package tn.esprit.categorie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.categorie.entites.Categorie;


public interface CategorieRepo extends JpaRepository<Categorie, Long> {
}
