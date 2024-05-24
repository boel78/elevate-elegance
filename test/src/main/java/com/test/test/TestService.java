package com.test.test;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class TestService {

    private final TestObjectRepository repository;
    public TestService(TestObjectRepository testObjectRepository) {
        this.repository = testObjectRepository;
    }

    public void addTestObject(TestObject testObject) {
        repository.insert(testObject);
    }

    public void updateTestObject(TestObject testObject) {
        TestObject foundObject = repository.findById(testObject.getId())
                .orElseThrow(() -> new RuntimeException(
                        String.format("TestObject with id %s not found", testObject.getId())));

        foundObject.setName(testObject.getName());

        repository.delete(foundObject);
        repository.save(testObject);
    }


    public List<TestObject> getAllTestObject() {
        return repository.findAll();
    }
    public TestObject getTestObjectByName(String name) {
        return repository.findByName(name).orElseThrow(() -> new RuntimeException(
                String.format("TestObject with name %s not found", name)));
    }
    public void deleteTestObject(long id) {
        repository.deleteById(id);
    }
}
