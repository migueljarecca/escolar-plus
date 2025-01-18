package com.miguel.app.resopitories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.Favorite;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    @Query("SELECT u FROM Favorite u WHERE u.userId = :userId")
    public List<Favorite> getFavoritesByUserId(@Param("userId") Long userId);

    @Query("SELECT u FROM Favorite u WHERE u.id = :id")
    public Optional<Favorite> findById(@Param("id") Long id);
}
