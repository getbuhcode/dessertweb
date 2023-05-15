package com.example.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_order")
public class Order {

    @Id
    @GeneratedValue
    private Integer orderId;

    private Integer quantity;

    private Float price;

    private Date createdAt;

}
