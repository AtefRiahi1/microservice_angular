package tn.esprit.voiture;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoitureRepository extends MongoRepository<Voiture, String> {
}
