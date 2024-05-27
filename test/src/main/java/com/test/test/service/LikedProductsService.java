package com.test.test.service;

import com.test.test.model.LikedProducts;
import com.test.test.repository.LikedProductsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikedProductsService {

    private final LikedProductsRepository likedProductsRepository;
    public LikedProductsService(LikedProductsRepository likedProductsRepository) {
        this.likedProductsRepository = likedProductsRepository;
    }

    public void createLikedProducts(LikedProducts likedProducts) {
        likedProductsRepository.save(likedProducts);
    }

    public List<LikedProducts> getLikedProductsByCustomer(String customerId) {
        return likedProductsRepository.findByCustomerId(customerId);
    }

    public List<LikedProducts> getLikedProductsByProduct(String productId) {
        return likedProductsRepository.findByProductId(productId);
    }

    public LikedProducts getLikedProductsById(String productId) {
        return likedProductsRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public void updateLikedProducts(LikedProducts likedProducts) {
        LikedProducts foundObject = likedProductsRepository.findById(likedProducts.getId())
                .orElseThrow(() -> new RuntimeException("No Liked products found"));
        foundObject.setProductId(likedProducts.getProductId());
        foundObject.setCustomerId(likedProducts.getCustomerId());
        likedProductsRepository.save(foundObject);
    }

    public void deleteLikedProducts(LikedProducts likedProducts) {
        likedProductsRepository.delete(likedProducts);
    }
    public void deleteLikedProductsByCustomer(String customerId) {
        likedProductsRepository.deleteByCustomerId(customerId);
    }
}
