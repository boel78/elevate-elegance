package com.test.test.service;

import com.test.test.model.Product;
import com.test.test.repository.MaterialRepository;
import com.test.test.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public void addProduct(Product product) {
        productRepository.save(product);
    }

    public void updateProduct(Product product) {
        Product oldProduct = productRepository.findById(product.getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));
        oldProduct.setName(product.getName());
        oldProduct.setPrice(product.getPrice());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setMaterial(product.getMaterial());
        productRepository.save(oldProduct);
    }

    public void deleteProduct(Product product) {
        productRepository.delete(product);
    }

    public Product getProductById(String id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductByName(String name) {
        return productRepository.findByName(name);
    }
    public List<Product> getProductsByMaterial(String materialid) {
        return productRepository.findByMaterial(materialid);
    }
}
