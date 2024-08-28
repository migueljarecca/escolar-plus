package com.miguel.app.models.dto;

// DTO -- PASO UNO crear entidad

public class UserDto {

    private Long id;
    private String username;
    private String lastname;
    private String email;

    public UserDto() {
    }
    
    public UserDto(Long id, String username, String lastname, String email) {
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.email = email;
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
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

    @Override
    public String toString() {
        return "UserDto [id=" + id + ", username=" + username + ", email=" + email + "]";
    }
    
}
