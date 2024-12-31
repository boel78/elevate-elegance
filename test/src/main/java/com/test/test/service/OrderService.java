package com.test.test.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.test.test.model.Order;
import com.test.test.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void addOrder(Order order){
        orderRepository.insert(order);
    }

    public List<Order> getOrderByUserId(String id) {
        return orderRepository.findByCustomerId(id);       
    }
}
