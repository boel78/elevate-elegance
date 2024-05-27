package com.test.test.repository;

import com.test.test.model.Inventory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface InventoryRepository extends MongoRepository<Inventory, String> {
    @Query("{'productid' : ?0}")
    Inventory findByProductid(String productid);
}
