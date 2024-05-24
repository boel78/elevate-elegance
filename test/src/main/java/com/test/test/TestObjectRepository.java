package com.test.test;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface TestObjectRepository extends MongoRepository<TestObject, Long> {
    @Query("{'name': ?0}")
    Optional<TestObject> findByName(String name);
}
