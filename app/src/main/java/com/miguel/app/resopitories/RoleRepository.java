package com.miguel.app.resopitories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

    @Query("SELECT u FROM Role u WHERE u.rolName = :rolName")
    public Optional<Role> getRoleByName(@Param("rolName") String rolName);
    
}
