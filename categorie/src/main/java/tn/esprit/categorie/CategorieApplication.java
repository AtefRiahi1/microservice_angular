package tn.esprit.categorie;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import tn.esprit.categorie.entites.Categorie;
import tn.esprit.categorie.repositories.CategorieRepo;

@SpringBootApplication
@NoArgsConstructor
public class CategorieApplication {

	public static void main(String[] args) {
		SpringApplication.run(CategorieApplication.class, args);
	}

	@Autowired
	private CategorieRepo  categorieRepo;
	@Bean
	ApplicationRunner init(){
		return (args)->{
			categorieRepo.save(new Categorie("motor"));
			categorieRepo.save(new Categorie("voiture"));
			categorieRepo.save(new Categorie("camion"));
			categorieRepo.findAll().forEach(System.out::println);
		};
	}


}
