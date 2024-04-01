package com.miguel.app.models.entities;

import com.miguel.app.enums.Genero;
import com.miguel.app.enums.Producto;
import com.miguel.app.enums.Talla;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Uniform {
    @Id
    @GeneratedValue(generator = "uuid")
    private Long id;
    private Double price;

    @Enumerated(EnumType.STRING)
    private Producto producto;

    @Enumerated(EnumType.STRING)
    private Talla talla;

    @Enumerated(EnumType.STRING)
    private Genero genero;

    @ManyToOne
    private School school;

    public Uniform() {
    }

    public Uniform(Long id, Double price, Producto producto, Talla talla, Genero genero, School school) {
        this.id = id;
        this.price = price;
        this.producto = producto;
        this.talla = talla;
        this.genero = genero;
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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Talla getTalla() {
        return talla;
    }

    public void setTalla(Talla talla) {
        this.talla = talla;
    }

    public Genero getGenero() {
        return genero;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    @Override
    public String toString() {
        return "Uniforme [id=" + id + ", price=" + price + ", producto=" + producto + ", talla=" + talla + ", genero="
                + genero + ", school=" + school + "]";
    }
}
