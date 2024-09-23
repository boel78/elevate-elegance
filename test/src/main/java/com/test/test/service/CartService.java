package com.test.test.service;

import com.test.test.model.Cart;
import com.test.test.repository.CartRepository;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private CartRepository cartRepository;
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public void createCart(Cart cart) {
        cartRepository.save(cart);
    }
    public Cart getCartById(String id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }
    public Cart getCartByCustomerId(String customerId) {
        return cartRepository.findByCustomerId(customerId);
    }
    public void deleteCartById(String id) {
        cartRepository.deleteById(id);
    }
    public void updateCart(Cart cart) {
        Cart foundCart = cartRepository.findById(cart.getId())
                .orElseThrow(() -> new RuntimeException("Cart not found"));
        foundCart.getProducts().clear();
        foundCart.setProductId(cart.getProducts());
        cartRepository.save(foundCart);
    }
    public void deleteCartByCustomerId(String customerId) {
        cartRepository.findByCustomerId(customerId);
    }
}
