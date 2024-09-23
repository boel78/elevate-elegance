package com.test.test.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Address {
    @JsonIgnore
    private String id;
    private String zipcode;
    private String address;
    private String town;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getZipcode() {
        return zipcode;
    }
    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getTown() {
        return town;
    }
    public void setTown(String town) {
        this.town = town;
    }

    
}
