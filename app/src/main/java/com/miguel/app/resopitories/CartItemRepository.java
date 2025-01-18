package com.miguel.app.resopitories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    
    @Query("SELECT u FROM CartItem u WHERE u.userId = :userId")
    public List<CartItem> getCartByUserId(@Param("userId") Long userId);

    @Query("SELECT u FROM CartItem u WHERE u.id = :id")
    public Optional<CartItem> findById(@Param("id") Long id);
}
