package com.miguel.app.models.entities;

import com.miguel.app.enums.Gender;
import com.miguel.app.enums.Product;
import com.miguel.app.enums.Size;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class CartItem {
    
    @Id
    private Long id;

    private Double price;

    @Enumerated(EnumType.STRING)
    private Product product;

    @Enumerated(EnumType.STRING)
    private Size size;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Long userId;

    private Long schoolId;

    @OneToOne
    private Image image;

    public CartItem() {
    }

    public CartItem(Long id, Double price, Product product, Size size, Gender gender, Long userId, Long schoolId,
            Image image) {
        this.id = id;
        this.price = price;
        this.product = product;
        this.size = size;
        this.gender = gender;
        this.userId = userId;
        this.schoolId = schoolId;
        this.image = image;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(Long schoolId) {
        this.schoolId = schoolId;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
    
}
