package com.miguel.app.models.entities;

import com.miguel.app.enums.Gender;
import com.miguel.app.enums.Product;
import com.miguel.app.enums.Size;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Uniform {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double price;

    @Enumerated(EnumType.STRING)
    private Product product;

    @Enumerated(EnumType.STRING)
    private Size size;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @ManyToOne
    private School school;

    public Uniform() {
    }

    public Uniform(Long id, Double price, Product product, Size size, Gender gender, School school) {
        this.id = id;
        this.price = price;
        this.product = product;
        this.size = size;
        this.gender = gender;
        this.school = school;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    @Override
    public String toString() {
        return "Uniforme [id=" + id + ", price=" + price + ", product=" + product + ", size=" + size + ", gender="
                + gender + ", school=" + school + "]";
    }
}
