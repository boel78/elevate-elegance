package com.test.test.repository;


import com.test.test.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface CartRepository extends MongoRepository<Cart, String> {

    @Query("{'id' : ?0}")
    Cart findByCustomerId(String id);
}
