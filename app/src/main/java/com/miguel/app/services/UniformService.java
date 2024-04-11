package com.miguel.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.dto.UniformDto;
import com.miguel.app.models.entities.Image;
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

    @Autowired
    private ImageService imageService;

    @Transactional(readOnly = true)
    public List<Uniform> findAllUniform() {
        return uniformRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Uniform> findByIdUniform(Long id) {
        return uniformRepository.findById(id);
    }

    @Transactional
    public Uniform createUniform(UniformDto uniformDto) {
    
        Optional<School> sOptional = schoolRepository.findById(uniformDto.getSchoolId());

        System.out.println("control de id de colegio: " +sOptional);
        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
        }

        MultipartFile file = uniformDto.getFile();
        Image img = imageService.createImage(file);

        Uniform uni = new Uniform();

        uni.setPrice(uniformDto.getPrice());
        uni.setProduct(uniformDto.getProduct());
        uni.setSize(uniformDto.getSize());
        uni.setGender(uniformDto.getGender());

        uni.setSchool(school);
        uni.setImage(img);

        uniformRepository.save(uni);

        return uni;
    }

    @Transactional
    public Optional<Uniform> updateUniform(UniformDto uniformDto, Long id) {

        System.out.println("control de id UNIFORM " +id);
        Optional<Uniform> uniOptional = uniformRepository.findById(id);

        System.out.println("control de id COLEGIO " +uniformDto.getSchoolId());

        Optional<School> sOptional = schoolRepository.findById(uniformDto.getSchoolId());


        School school = new School();

        if (sOptional.isPresent()) {
            school = sOptional.get();
        }

   
        if (uniOptional.isPresent()) {

            Uniform uniDb = uniOptional.orElseThrow();
            System.out.println("control de id IMAGEN " +uniDb.getImage().getId());


            MultipartFile file = uniformDto.getFile();
            Image img = imageService.updateImage(file, uniDb.getImage().getId());
    
            uniDb.setPrice(uniformDto.getPrice());
            uniDb.setProduct(uniformDto.getProduct());
            uniDb.setSize(uniformDto.getSize());
            uniDb.setGender(uniformDto.getGender());

            uniDb.setSchool(school);
            uniDb.setImage(img);
        
            Uniform uni = uniformRepository.save(uniDb);

            return Optional.ofNullable(uni);
        }
        return Optional.empty();
    }

    @Transactional
    public void deleteUniform(Long id) {

        Optional<Uniform> uni = uniformRepository.findById(id);

        if (uni.isPresent()) {
            Uniform uniform = uni.orElseThrow();

            uniformRepository.deleteById(id);
            
            
        }
    }
}
