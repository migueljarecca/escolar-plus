package com.miguel.app.models.dto;

import org.springframework.web.multipart.MultipartFile;

public class SchoolDto {
    
    private String name;
    private String address;
    private String schoolCode;
    private MultipartFile file;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getSchoolCode() {
        return schoolCode;
    }
    public void setSchoolCode(String schoolCode) {
        this.schoolCode = schoolCode;
    }
    public MultipartFile getFile() {
        return file;
    }
    public void setFile(MultipartFile file) {
        this.file = file;
    }

    
}
