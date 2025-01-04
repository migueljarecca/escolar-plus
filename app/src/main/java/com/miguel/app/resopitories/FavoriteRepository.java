package com.miguel.app.resopitories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.Favorite;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    

}
