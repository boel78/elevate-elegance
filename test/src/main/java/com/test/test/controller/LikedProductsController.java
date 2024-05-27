package com.test.test.controller;

import com.test.test.model.LikedProducts;
import com.test.test.repository.LikedProductsRepository;
import com.test.test.service.LikedProductsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/likedproducts")
public class LikedProductsController {

    private final LikedProductsService likedProductsService;
    public LikedProductsController(LikedProductsService likedProductsService,
                                   LikedProductsRepository likedProductsRepository) {
        this.likedProductsService = likedProductsService;
    }

    @GetMapping("/customerid/{id}")
    public ResponseEntity<List<LikedProducts>> getLikedProductsByCustomerId(@PathVariable("id") String id) {
        return ResponseEntity.ok(likedProductsService.getLikedProductsByCustomer(id));
    }
    @GetMapping("/productid/{id}")
    public ResponseEntity<List<LikedProducts>> getLikedProductsByProductId(@PathVariable("id") String id) {
        return ResponseEntity.ok(likedProductsService.getLikedProductsByProduct(id));
    }

    @PostMapping
    public void createLikedProduct(@RequestBody LikedProducts likedProducts) {
        likedProductsService.createLikedProducts(likedProducts);
    }

    @PutMapping
    public void updateLikedProduct(@RequestBody LikedProducts likedProducts) {
        likedProductsService.updateLikedProducts(likedProducts);
    }

    @DeleteMapping
    public void deleteLikedProduct(@RequestBody LikedProducts likedProducts) {
        likedProductsService.deleteLikedProducts(likedProducts);
    }
    @DeleteMapping("/customerid/{id}")
    public void deleteLikedProductsByCustomerId(@PathVariable("id") String id) {
        likedProductsService.deleteLikedProductsByCustomer(id);
    }
}
