package com.example.api_gateway_server;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@CrossOrigin("*")
public class SpringCloudConfig {
    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
//Micro-service 1
                .route("voiture",r -> r.path("/voiture/**")
                        .uri("http://voiture:9095/"))
                .route("categorie",r -> r.path("/categorie/**")
                        .uri("http://categorie:9092/"))
                .route("pieces",r -> r.path("/piece/**")
                        .uri("http://pieces:9091/"))
                .route("produits",r -> r.path("/produits/**")
                        .uri("http://produits:9099/"))
                .route("projetmicroservice",r -> r.path("/motos/**")
                        .uri("http://projetmicroservice:9098/"))
                .route("vetements",r -> r.path("/vetements/**")
                        .uri("http://vetements:9096/"))


                .build();
    }
}
