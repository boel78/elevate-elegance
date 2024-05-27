package com.test.test.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;

@Document("cart")
public class Cart {

    @Id
    private String id;
    private HashMap<Product, String> products;
    private String customerId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public HashMap<Product, String> getProducts() {
        return products;
    }

    public void setProductId(HashMap<Product, String> productId) {
        this.products = productId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }
}
