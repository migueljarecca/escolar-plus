package com.miguel.app.models.entities;

public class School {

    private Long id;
    private String name;
    private String address;
    private String schoolCode;

    public School () {
    }

    public School(Long id, String name, String address, String schoolCode) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.schoolCode = schoolCode;
    }

    public Long getId() {
        return id;
    }

    public Long setId(Long id) {
        return id;
    }

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

    @Override
    public String toString() {
        return "Colegio [id=" + id + ", name=" + name + ", address=" + address + ", schoolCode=" + schoolCode + "]";
    } 

}