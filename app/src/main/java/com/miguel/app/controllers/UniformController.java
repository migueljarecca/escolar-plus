package com.miguel.app.controllers;

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

import com.miguel.app.models.dto.UniformDto;
import com.miguel.app.models.entities.Uniform;
import com.miguel.app.services.UniformService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/uniforms")
@CrossOrigin(originPatterns = "*")
public class UniformController {

    @Autowired
    private UniformService uniformService;
    
    @GetMapping
    public List<Uniform> List() {
        return uniformService.findAllUniform();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<Uniform> uOptional = uniformService.findByIdUniform(id);

        if (uOptional.isPresent()) {
            return ResponseEntity.ok(uOptional.orElseThrow());
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@ModelAttribute UniformDto uniformDto) {
        System.out.println("control de uniform create " +uniformDto.getPrice());
        Uniform uniform = uniformService.createUniform(uniformDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(uniform);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@ModelAttribute UniformDto uniformDto, @PathVariable Long id) {

        Optional<Uniform> uOptional = uniformService.updateUniform(uniformDto, id);

        if (uOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(uOptional.orElseThrow());
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Uniform> uni = uniformService.findByIdUniform(id);

        if (uni.isPresent()) {
            uniformService.deleteUniform(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/by-school/{id}")
    public List<Uniform>  getUniformsBySchoolId(@PathVariable Long id) {
        return uniformService.findBySchool(id);
        
    }

}
