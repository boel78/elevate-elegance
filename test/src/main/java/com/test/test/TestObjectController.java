package com.test.test;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
public class TestObjectController {

    private final TestService testService;
    public TestObjectController(TestService testService){
        this.testService = testService;
    }

    @PostMapping
    public ResponseEntity addTestObject(@RequestBody TestObject testObject){
        testService.addTestObject(testObject);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<TestObject>> getAllTestObject(){
        return ResponseEntity.ok(testService.getAllTestObject());
    }

    @PutMapping
    public ResponseEntity updateTestObject(@RequestBody TestObject testObject){
        testService.updateTestObject(testObject);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/{name}")
    public ResponseEntity<TestObject> getTestObjectByName(@PathVariable String name){
        return ResponseEntity.ok(testService.getTestObjectByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteTestObject(@PathVariable long id) {
        testService.deleteTestObject(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
