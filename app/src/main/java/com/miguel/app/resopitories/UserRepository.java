package com.miguel.app.resopitories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miguel.app.models.entities.User;


public interface UserRepository extends JpaRepository<User, String> {
    
    Optional<User>findByUsername(String name);

    Optional<User>findById(String id);


}
