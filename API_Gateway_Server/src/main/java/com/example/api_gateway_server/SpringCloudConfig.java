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


                .build();
    }
}
