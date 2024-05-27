package com.test.test.controller;

import com.test.test.model.Cart;
import com.test.test.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private CartService cartService;
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable("id") String id) {
        return ResponseEntity.ok(cartService.getCartById(id));
    }
    @GetMapping("/customerid/{id}")
    public ResponseEntity<Cart> getCartByCustomerId(@PathVariable("id") String id) {
        return ResponseEntity.ok(cartService.getCartByCustomerId(id));
    }

    @PostMapping
    public ResponseEntity<Cart> addCart(@RequestBody Cart cart) {
        cartService.createCart(cart);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart) {
        cartService.updateCart(cart);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<Cart> deleteCart(@PathVariable("id") String id) {
        cartService.deleteCartById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @DeleteMapping("/customerid/{id}")
    public ResponseEntity<Cart> deleteCartByCustomer(@PathVariable("id") String id) {
        cartService.deleteCartByCustomerId(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
