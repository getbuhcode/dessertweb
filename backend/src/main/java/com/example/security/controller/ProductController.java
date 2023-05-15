package com.example.security.controller;

import com.example.security.entity.Product;
import com.example.security.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/product")
@CrossOrigin
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public void addProduct (@RequestBody Product product){
        productService.addProduct(product, product.getProductId());
    }

    @GetMapping
    public List<Product> findAllProducts () {
        return productService.findAllProducts();
    }
}
