package com.example.motos.moto.Repository;

import com.example.motos.moto.Entiter.Moto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotoRepository extends MongoRepository<Moto,String> {
}
