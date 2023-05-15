package com.example.security.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_product")
public class Product {

    @Id
    private Integer productId;

    private String productName;

    private Float price;

    private String unit;

    @OneToMany(targetEntity = Order.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "op_fk", referencedColumnName = "productId")
    private List<Order> orders;

}
