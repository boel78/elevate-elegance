package com.test.test.service;

import com.test.test.model.Customer;
import com.test.test.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

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
        if(currentCustomer.getPassword().equals(password)){
            isMatching = true;
        }
        return isMatching;
    }
}
