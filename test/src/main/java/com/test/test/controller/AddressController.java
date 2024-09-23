package com.test.test.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.test.test.service.AddressService;
import com.test.test.model.Address;
import com.test.test.model.Customer;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/address")
public class AddressController {
        private AddressService addressService;
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<Address>> getAddressByIds(@RequestParam("addresses") String[] addresses){
        return ResponseEntity.ok(addressService.getAddresses(addresses));
    }

    @PostMapping
    public ResponseEntity createAddress(@RequestBody Address address) {
        try {
            addressService.addAddress(address);
            return ResponseEntity.status(HttpStatus.CREATED).body("Address registered successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
