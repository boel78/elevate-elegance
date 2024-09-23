package com.test.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.test.test.model.Address;

public interface AddressRepository extends MongoRepository<Address, String>{

    @Query("{'id' : ?0}")
    Address findByAddressId(String id);
    
}
