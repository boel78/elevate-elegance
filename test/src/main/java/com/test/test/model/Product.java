package com.test.test.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document("product")
public class Product {

    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String material;
    @JsonProperty("isTopSeller")
    private boolean isTopSeller;
    private String image;
    private String category;
    private String[] size;
    private String fitting;
    private String careAdvice;
    private String dateAdded;
    

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public boolean isTopSeller() {
        return isTopSeller;
    }

    public void setTopSeller(boolean topSeller) {
        isTopSeller = topSeller;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String[] getSize() {
        return size;
    }

    public void setSize(String[] size) {
        this.size = size;
    }

    public String getFitting() {
        return fitting;
    }

    public void setFitting(String fitting) {
        this.fitting = fitting;
    }

    public String getCareAdvice() {
        return careAdvice;
    }

    public void setCareAdvice(String careAdvice) {
        this.careAdvice = careAdvice;
    }

    public String getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Product() { }
    
   
}
