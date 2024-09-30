package com.test.test.service;

import org.springframework.stereotype.Service;
import java.util.*;

import com.test.test.model.Address;
import com.test.test.model.Cart;
import com.test.test.model.Customer;
import com.test.test.repository.AddressRepository;
import com.test.test.repository.CartRepository;

@Service
public class AddressService {

    private AddressRepository addressRepository;
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository; 
    }

    public Address getAddressById(String id) {
        return addressRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    public ArrayList<Address> getAddresses(String[] idn){
        ArrayList<Address> addresser = new ArrayList<>();
        for(String id : idn){
            addresser.add(getAddressById(id));
        }
        return addresser;
    }

    public void addAddress(Address address) {
        
        addressRepository.save(address);
    }

    public List<Address> getAllAddresses(){
        return addressRepository.findAll();
    }

    public void deleteAddress(String id){
        addressRepository.deleteById(id);
    }

}


