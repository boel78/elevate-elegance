package com.test.test.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("inventory")
public class Inventory {
    private String id;
    private Product product;
    private int quantity;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return product.getId();
    }

    public void setProductId(Product productId) {
        this.product = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
