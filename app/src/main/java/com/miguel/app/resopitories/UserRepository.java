package com.miguel.app.resopitories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT u FROM User u WHERE u.id = :id")
    public User findByIdUser(@Param("id") Long id);

    // SEXTO PASO en security crear una consulta JPA para traer un usuario por email
    @Query("SELECT u FROM User u WHERE u.email = :email")
    public Optional<User> getUserByEmail(@Param("email") String email);
    
}
