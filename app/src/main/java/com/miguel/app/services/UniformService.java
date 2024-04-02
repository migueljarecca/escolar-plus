package com.miguel.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.School;
import com.miguel.app.models.entities.Uniform;
import com.miguel.app.resopitories.SchoolRepository;
import com.miguel.app.resopitories.UniformRepository;

@Service
public class UniformService {
    
    @Autowired
    private UniformRepository uniformRepository;

    @Autowired
    private SchoolRepository schoolRepository;

    @Transactional(readOnly = true)
    public List<Uniform> findAllUniform() {
        return uniformRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Uniform> findByIdUniform(Long id) {
        return uniformRepository.findById(id);
    }

    @Transactional
    public Uniform createUniform(Uniform uniform, Long idSchool) {
        Optional<School> sOptional = schoolRepository.findById(idSchool);

        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
        }

        Uniform uni = new Uniform();

        uni.setPrice(uniform.getPrice());
        uni.setProducto(uniform.getProducto());
        uni.setTalla(uniform.getTalla());
        uni.setGenero(uniform.getGenero());
        uni.setSchool(school);

        uniformRepository.save(uni);
        return uni;
    }

    @Transactional
    public Optional<Uniform> updateUniform(Uniform uniform, Long idUniform, Long idSchool) {

        Optional<Uniform> uniOptional = uniformRepository.findById(idUniform);
        Optional<School> sOptional = schoolRepository.findById(idSchool);

        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
        }

        if (uniOptional.isPresent()) {
            Uniform uniDb = uniOptional.orElseThrow();

            uniDb.setPrice(uniform.getPrice());
            uniDb.setProducto(uniform.getProducto());
            uniDb.setTalla(uniform.getTalla());
            uniDb.setGenero(uniform.getGenero());

            uniDb.setSchool(school);

            Uniform uni = uniformRepository.save(uniDb);

            return Optional.ofNullable(uni);
        }
        return Optional.empty();
    }

    @Transactional
    public void deleteUniform(Long id) {
        uniformRepository.deleteById(id);
    }
}
