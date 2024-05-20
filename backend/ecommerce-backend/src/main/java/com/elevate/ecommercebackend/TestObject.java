package com.elevate.ecommercebackend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TestObject {

    @Id
    private long id;
    @Column
    private String name;
}
