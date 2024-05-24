package com.test.test.repository;

import com.test.test.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    @Query("{'firstName': ?0}")
    Optional<Customer> findByFirstName(String name);
}
