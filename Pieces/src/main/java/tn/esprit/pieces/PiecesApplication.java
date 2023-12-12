package tn.esprit.pieces;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import org.springframework.context.annotation.Bean;
import tn.esprit.pieces.Repositorie.PiecesRepo;
import tn.esprit.pieces.entities.Pieces;

@EnableEurekaClient
@SpringBootApplication

public class PiecesApplication {

    public static void main(String[] args) {
        SpringApplication.run(PiecesApplication.class, args);}

        @Autowired
        private PiecesRepo piecesRepo;
        @Bean
        ApplicationRunner init(){
            return (args)->{
                piecesRepo.save(new Pieces("BenJ","mbenjamaia@gmail.com",1235,"azdazd"));
                piecesRepo.save(new Pieces("ab","mb@gmail.com",1235,"azdazd"));
                piecesRepo.save(new Pieces("ba","ma@gmail.com",1235,"azdazd"));
                piecesRepo.findAll().forEach(System.out::println);
            };
    }

}
