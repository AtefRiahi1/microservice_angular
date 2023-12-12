package tn.esprit.voiture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureService {
    @Autowired
    private VoitureRepository voitureRepository;
    public Voiture addVoiture(Voiture voiture){
        return voitureRepository.save(voiture);
    }
    public List<Voiture> getAll() {
        return voitureRepository.findAll();
    }
    public Voiture updateVoiture(String id,Voiture newVoiture){
        if(voitureRepository.findById(id).isPresent()){
            Voiture existingVoiture = voitureRepository.findById(id).get();
            existingVoiture.setMarque(newVoiture.getMarque());
            existingVoiture.setModele(newVoiture.getModele());
            existingVoiture.setAnneeFabrication(newVoiture.getAnneeFabrication());
            existingVoiture.setPrix(newVoiture.getPrix());
            existingVoiture.setDescription(newVoiture.getDescription());
            existingVoiture.setImage(newVoiture.getImage());
            return voitureRepository.save(existingVoiture);
        } else
            return null;
    }
    public void deleteVoiture(String id) {
        voitureRepository.deleteById(id);
    }

    public Voiture getdetail(String id) {
        return voitureRepository.findById(id).orElse(null);
    }
}
