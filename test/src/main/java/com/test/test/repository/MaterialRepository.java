package com.test.test.repository;

import com.test.test.model.Material;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MaterialRepository extends MongoRepository<Material, String> {
    @Query("{'name' : ?0}")
    Material findByName(String name);

    @Query("{'type' : ?0}")
    List<Material> findByType(String type);
}
