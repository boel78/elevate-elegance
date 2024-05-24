package com.test.test.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("inventory")
public class Inventory {
    private String id;
    private Product productId;
    private int quantity;
}
