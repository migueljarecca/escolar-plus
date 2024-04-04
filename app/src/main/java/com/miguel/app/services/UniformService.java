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
    public Uniform createUniform(Uniform uniform) {
        System.out.println("Control de price: " +uniform.getPrice());
        System.out.println("Control de producto: " +uniform.getProduct());
        System.out.println("Control de talla: " +uniform.getSize());
        System.out.println("Control de genero: " +uniform.getGender());

        System.out.println("Control de id: " +uniform.getSchool().getId());
        System.out.println("Control de name school: " +uniform.getSchool().getName());
        System.out.println("Control de direccion school: " +uniform.getSchool().getAddress());
        System.out.println("Control de codigo school: " +uniform.getSchool().getSchoolCode());

        Optional<School> sOptional = schoolRepository.findById(uniform.getSchool().getId());

        System.out.println("control de id de colegio: " +sOptional);
        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
            System.out.println("control de la entidad colegio: " +school);
        }

        Uniform uni = new Uniform();

        uni.setPrice(uniform.getPrice());
        uni.setProduct(uniform.getProduct());
        uni.setSize(uniform.getSize());
        uni.setGender(uniform.getGender());
        uni.setSchool(school);

        uniformRepository.save(uni);
        return uni;
    }

    @Transactional
    public Optional<Uniform> updateUniform(Uniform uniform, Long idUniform) {

        Optional<Uniform> uniOptional = uniformRepository.findById(idUniform);
        Optional<School> sOptional = schoolRepository.findById(uniform.getSchool().getId());

        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
        }

        if (uniOptional.isPresent()) {
            Uniform uniDb = uniOptional.orElseThrow();

            uniDb.setPrice(uniform.getPrice());
            uniDb.setProduct(uniform.getProduct());
            uniDb.setSize(uniform.getSize());
            uniDb.setGender(uniform.getGender());

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
