package com.test.test.repository;


import com.test.test.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {
    @Query("{'id' :  ?0}")
    List<Order> findByCustomerId(String id);

    @Query("{'id' :  ?0}")
    List<Order> findByProductsId(String id);
}
