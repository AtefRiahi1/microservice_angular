package tn.esprit.vetements;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class VetementsApplication {

    public static void main(String[] args) {
        SpringApplication.run(VetementsApplication.class, args);
    }

}
