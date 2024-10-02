package com.test.test.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.test.test.model.Product;
import com.test.test.service.MaterialService;
import com.test.test.service.ProductService;
import org.apache.coyote.Response;
import org.bson.types.Binary;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


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

    @PostMapping("/multiple")
    public ResponseEntity<List<Product>> getMethodName(@RequestBody String[] ids) {
        return ResponseEntity.ok(productService.getMultipleProducts(ids));
    }
    

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity createProduct(@RequestPart("product") String productJson, @RequestPart("file") MultipartFile file) {
        // Använd ObjectMapper för att konvertera JSON-strängen till ett Product-objekt
        ObjectMapper objectMapper = new ObjectMapper();
        Product product;

        try {
            
            product = objectMapper.readValue(productJson, Product.class); // Konvertera till Product-objekt
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // Hantera fel
        }
        
        
        
        
        productService.createProduct(product, file);
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
