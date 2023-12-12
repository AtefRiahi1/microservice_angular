package com.example.motos;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MotosApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotosApplication.class, args);
	}

}
