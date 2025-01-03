package com.miguel.app.models.entities;

import java.util.List;
import java.util.Set;

// import jakarta.persistence.CollectionTable;
// import jakarta.persistence.Column;
// import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.UniqueConstraint;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String password;

    // DECIMO PASO crear la tabla de intersección, luego modificar la BD
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "users_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"),
        uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "role_id"})})
    private List<Role> roles;

    // @ElementCollection // Para mapear un Set en una tabla secundaria
    // @CollectionTable(name = "user_favorites", // Nombre de la tabla secundaria
    //         joinColumns = @JoinColumn(name = "user_id"))
    // @Column(name = "item_id")
    // private Set<Long> favorites;

    public User() {
    }

    public User(Long id, String name, String lastname, String email, String password, 
            List<Role> roles, Set<Long> favorites) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.roles = roles;
        // this.favorites = favorites;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    // public Set<Long> getFavorites() {
    //     return favorites;
    // }

    // public void setFavorites(Set<Long> favorites) {
    //     this.favorites = favorites;
    // }

    // @Override
    // public String toString() {
    //     return "User [id=" + id + ", name=" + name + ", lastname=" + lastname + ", email=" + email + ", password="
    //             + password + ", roles=" + roles + "]";
    // }

}
