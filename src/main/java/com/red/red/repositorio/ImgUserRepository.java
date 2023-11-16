package com.red.red.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.red.red.entidades.ImgUser;

@Repository
public interface ImgUserRepository extends JpaRepository<ImgUser, String>{
    
}
