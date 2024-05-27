package com.test.test.repository;

import com.test.test.model.LikedProducts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface LikedProductsRepository extends MongoRepository<LikedProducts, String> {
    @Query("{'id' :  ?0}")
    List<LikedProducts> findByCustomerId(String id);

    @Query("{'id' :  ?0}")
    List<LikedProducts> findByProductId(String id);

    @Query("{'id' :  ?0}")
    void deleteByCustomerId(String id);
}
