package com.elevate.ecommercebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class EcommerceBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceBackendApplication.class, args);
	}

	@Autowired
	TestObjectRepository repository;

	void createTestObjects() {
		repository.save(new TestObject("1", "Bajs"));
		repository.save(new TestObject("2", "Najs"));
	}




}
