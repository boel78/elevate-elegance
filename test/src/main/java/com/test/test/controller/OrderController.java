package com.test.test.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.test.model.Customer;
import com.test.test.model.Order;
import com.test.test.model.Product;
import com.test.test.service.OrderService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/order")
public class OrderController {

    private final OrderService orderService;
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable String userId) {
        return ResponseEntity.ok(orderService.getOrderByUserId(userId));
    }

    @PostMapping
    public ResponseEntity createOrder(@RequestBody Order order) {
        try {
            orderService.addOrder(order);
            return ResponseEntity.status(HttpStatus.CREATED).body("Order registered successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
