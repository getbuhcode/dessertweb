package com.example.security.service;

import com.example.security.entity.Product;
import com.example.security.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void addProduct(Product product, Integer productId){
        boolean exists = productRepository.existsById(productId);
        if (exists) {
            throw new IllegalStateException("product with id " + productId + " exists");
        }
        productRepository.save(product);
    }

    public List<Product> findAllProducts(){
        return productRepository.findAll();
    }
}
