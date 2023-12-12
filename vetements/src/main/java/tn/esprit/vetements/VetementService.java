package tn.esprit.vetements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VetementService {
    @Autowired
    private VetementRepository vetementRepository;
    public Vetement addVetement(Vetement vetement) {
        return vetementRepository.save(vetement);
    }
    public Vetement updateVetement(Vetement vetement) {
        return vetementRepository.save(vetement);
    }

    public List<Vetement> getAllVetements() {
        return vetementRepository.findAll();
    }


    public Vetement getVetementById(Long id) {
        return vetementRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Ce vetement n'existe pas"));
    }
    public void deleteVetement(Long id) {
        vetementRepository.deleteById(id);
    }
    @Bean
    ApplicationRunner init(){
        return (args)->{

            vetementRepository.save(new Vetement("veste","noire","M","ZARA","Hiver","Femme",200.0,"null"));
            vetementRepository.save(new Vetement("Pull","Blanc","M","BERSHKA","Hiver","Femme",100.0,"null"));
            vetementRepository.findAll().forEach(System.out::println);
        };
    }
}
