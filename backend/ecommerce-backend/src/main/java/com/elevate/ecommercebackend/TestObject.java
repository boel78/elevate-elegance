package com.elevate.ecommercebackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("test")
public class TestObject {

    @Id
    private String id;
    @Column
    private String name;

    public TestObject(){}

    public TestObject(String id, String name){
        this.name = name;
        this.id = id;
    }
}
