package com.test.test.controller;

import com.test.test.model.Product;
import com.test.test.service.MaterialService;
import com.test.test.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable String id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<Product> getProductByName(@PathVariable String name) {
        return ResponseEntity.ok(productService.getProductByName(name));
    }
    @GetMapping("/material/{materialid}")
    public ResponseEntity<List<Product>> getProductByMaterial(@PathVariable String materialid) {
        return ResponseEntity.ok(productService.getProductsByMaterial(materialid));
    }
    @GetMapping("/topSeller")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<List<Product>> getProductByTopSeller() {
        return ResponseEntity.ok(productService.getProductsByIsTopSeller());
    }

    @PostMapping
    public ResponseEntity createProduct(@RequestBody Product product) {
        productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity updateProduct(@RequestBody Product product) {
        productService.updateProduct(product);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity deleteProduct(@RequestBody Product product) {
        productService.deleteProduct(product);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
