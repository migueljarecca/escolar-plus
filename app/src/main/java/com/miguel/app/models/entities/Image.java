package com.miguel.app.models.entities;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Image {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mime;
    private String name;

    @Lob @Basic(fetch = FetchType.LAZY)
    private byte[] conent;

    public Image() {
    }

    public Image(Long id, String mime, String name, byte[] conent) {
        this.id = id;
        this.mime = mime;
        this.name = name;
        this.conent = conent;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMime() {
        return mime;
    }

    public void setMime(String mime) {
        this.mime = mime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getConent() {
        return conent;
    }

    public void setConent(byte[] conent) {
        this.conent = conent;
    }
    
}
