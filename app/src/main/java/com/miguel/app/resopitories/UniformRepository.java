package com.miguel.app.resopitories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.miguel.app.models.entities.Uniform;

@Repository
public interface UniformRepository extends JpaRepository<Uniform, Long> {
    
    @Query("SELECT u FROM Uniform u u.school.name = :name")
    public List<Uniform> findBySchool(@Param ("name") String name );

}
