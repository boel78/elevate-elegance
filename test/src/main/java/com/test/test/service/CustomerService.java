package com.test.test.service;

import com.test.test.model.Customer;
import com.test.test.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean emailExists(String email) {
        return customerRepository.existsByEmail(email);
    }

    private final CustomerRepository customerRepository;
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void addCustomer(Customer customer) {
        if (emailExists(customer.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        String hashedPassword = passwordEncoder.encode(customer.getPassword());
        customer.setPassword(hashedPassword);
        customerRepository.insert(customer);
    }

    public void updateCustomer(Customer customer) {
        Customer foundObject = customerRepository.findById(customer.getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        foundObject.setFirstName(customer.getFirstName());
        foundObject.setLastName(customer.getLastName());
        foundObject.setGender(customer.getGender());
        foundObject.setEmail(customer.getEmail());
        foundObject.setPhone(customer.getPhone());
        foundObject.setLikedProducts(customer.getLikedProducts());
        if(!customer.getPassword().equals("")){
            foundObject.setPassword(customer.getPassword());
        }
        foundObject.setAddresses(customer.getAddresses());
        foundObject.setDateOfBirth(customer.getDateOfBirth());
        customerRepository.save(foundObject);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(String id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));
    }

    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }

    public Customer getCustomerByName(String name) {
        return customerRepository.findByFirstName(name)
                .orElseThrow(()-> new RuntimeException("customer not found"));
    }
    public Customer getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email)
                .orElseThrow(()-> new RuntimeException("email not found"));
    }

    public boolean getCustomerPasswordConfirm(String email, String password){
        Customer currentCustomer = customerRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("email not found"));
        boolean isMatching = false;
        if(passwordEncoder.matches(password, currentCustomer.getPassword())){
            isMatching = true;
        }
        return isMatching;
    }

}
