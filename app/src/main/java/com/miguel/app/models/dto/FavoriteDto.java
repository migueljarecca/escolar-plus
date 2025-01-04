package com.miguel.app.models.dto;

import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.enums.Gender;
import com.miguel.app.enums.Product;
import com.miguel.app.enums.Size;

public class FavoriteDto {
    
    private Long id;
    private Double price;
    private Product product;
    private Size size;
    private Gender gender;
    
    private Long userId;
    private Long schoolId;

    MultipartFile file;

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

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
    
}
