package com.example.security.service;

import com.example.security.dto.OrderRequest;
import com.example.security.entity.User;
import com.example.security.repository.OrderRepository;
import com.example.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;


@Service
public class OrderService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(UserRepository userRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
    }

    public User addOrders(OrderRequest orderRequest) {
        return userRepository.save(orderRequest.getUser());
    }

    public List<User> findAllOrders() {
        return userRepository.findAll();
    }

    public Optional<User> findAllOrdersById(Integer id) {
        boolean exists = userRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("user with id " + id + " does not exists");
        }
        return userRepository.findById(id);
    }
}
