package com.red.red.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.red.red.entity.ImgUser;

@Repository
public interface ImgUserRepository extends JpaRepository<ImgUser, String>{
    
}
