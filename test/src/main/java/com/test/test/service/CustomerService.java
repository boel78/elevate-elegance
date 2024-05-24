package com.test.test.service;

import com.test.test.model.Customer;
import com.test.test.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void addCustomer(Customer customer) {
        customerRepository.insert(customer);
    }

    public void updateCustomer(Customer customer) {
        Customer foundObject = customerRepository.findById(customer.getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        foundObject.setFirstName(customer.getFirstName());
        foundObject.setLastName(customer.getLastName());
        foundObject.setEmail(customer.getEmail());
        foundObject.setPhone(customer.getPhone());
        foundObject.setPassword(customer.getPassword());
        foundObject.setAddress(customer.getAddress());
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
}
