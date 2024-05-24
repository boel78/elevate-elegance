package com.elevate.ecommercebackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TestObjectRepository extends MongoRepository<TestObject, String> {
  @Query("{name:'?0'}")
  TestObject findItemByName(String name);


}