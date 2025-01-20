package com.test.test.repository;


import com.test.test.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    @Query("{'material' : ?0}")
    List<Product> findByMaterial(String materialid);

    @Query("{'name' : ?0}")
    Product findByName(String name);

    List<Product> findByIsTopSeller(boolean isTopSeller);

    Product findFirstByOrderByIdAsc();
}
