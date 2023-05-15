package com.example.security.controller;

import com.example.security.dto.OrderRequest;
import com.example.security.entity.User;
import com.example.security.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/order")
@CrossOrigin
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public User placeOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.addOrders(orderRequest);
    }

    @GetMapping
    public List<User> findAllOrders() {
        return orderService.findAllOrders();
    }

    @GetMapping(path = "{id}")
    public Optional<User> findAllOrdersById(@PathVariable Integer id) {
        return orderService.findAllOrdersById(id);
    }

}
