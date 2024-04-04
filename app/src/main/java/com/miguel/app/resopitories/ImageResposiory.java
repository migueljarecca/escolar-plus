package com.miguel.app.resopitories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.Image;

@Repository
public interface ImageResposiory extends JpaRepository<Image, Long>{

}
