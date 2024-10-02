package com.test.test.service;

import com.test.test.model.Product;
import com.test.test.repository.ProductRepository;



import org.bson.types.Binary;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.ArrayList;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public void createProduct(Product product, MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains("..")){
            System.out.println("Not a valid filename");
        }
        try{
            product.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch(IOException e){
            e.printStackTrace();
        }
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

    public List<Product> getMultipleProducts(String[] ids){
        List<Product> newList = new ArrayList<Product>();
        for(String productID : ids){
            newList.add(getProductById(productID));
        }
        return newList;
    }

    public Product getProductByName(String name) {
        return productRepository.findByName(name);
    }
    public List<Product> getProductsByMaterial(String materialid) {
        return productRepository.findByMaterial(materialid);
    }
    public List<Product> getProductsByIsTopSeller(){
        return productRepository.findByIsTopSeller(true);
    }
}
