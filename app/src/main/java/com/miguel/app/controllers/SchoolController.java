package com.miguel.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.models.dto.SchoolDto;
import com.miguel.app.models.entities.School;
import com.miguel.app.services.SchoolService;

@RestController
@RequestMapping("/school")
@CrossOrigin(originPatterns = "*")
public class SchoolController {
    
    @Autowired
    private SchoolService schoolService;

    @GetMapping
    public List<School> list() {
        List<School> schools = schoolService.findAllSchools();
        return schools;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<School> schoolOptional = schoolService.findByIdSchool(id);

        if (schoolOptional.isPresent()) {
            return ResponseEntity.ok(schoolOptional.orElseThrow());
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@ModelAttribute SchoolDto schoolDto) {
        School requestSchool = schoolService.create(schoolDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(requestSchool);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@ModelAttribute SchoolDto schoolDto, @PathVariable Long id) {
        Optional<School> schoolOptional = schoolService.update(schoolDto, id);
        if (schoolOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(schoolOptional);
        } 

        return ResponseEntity.notFound().build();
    } 

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<School> schoolOptional = schoolService.findByIdSchool(id);

        if (schoolOptional.isPresent()) {
            schoolService.remove(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

}
