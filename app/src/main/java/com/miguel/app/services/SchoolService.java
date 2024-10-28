package com.miguel.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.dto.SchoolDto;
import com.miguel.app.models.entities.Image;
import com.miguel.app.models.entities.School;
import com.miguel.app.resopitories.SchoolRepository;

@Service
public class SchoolService {
    
    @Autowired
    private SchoolRepository schoolRepository;

    @Autowired
    private ImageService imageService;

    @Transactional(readOnly = true)
    public List<School> findAllSchools() {
        List<School> schools = schoolRepository.findAll();
        return schools;
    }

    @Transactional(readOnly = true)
    public Optional<School> findByIdSchool(Long id) {
        return schoolRepository.findById(id);
    }

    @Transactional
    public School create(SchoolDto schoolDto) {

        School school = new School();

        school.setName(schoolDto.getName());
        school.setAddress(schoolDto.getAddress());
        school.setSchoolCode(schoolDto.getSchoolCode());

        MultipartFile file = schoolDto.getFile();
        Image image = imageService.createImage(file);

        school.setImage(image);

        schoolRepository.save(school);
        
        return school;
    }

    @Transactional
    public Optional<School> update(SchoolDto schoolDto, Long id) {
        Optional<School> schoolOptional = schoolRepository.findById(id);

        if (schoolOptional.isPresent()) {
            School dbSchool = schoolOptional.orElseThrow();
            dbSchool.setName(schoolDto.getName());
            dbSchool.setAddress(schoolDto.getAddress());
            dbSchool.setSchoolCode(schoolDto.getSchoolCode());

             // Verificar si hay un archivo nuevo para actualizar la imagen
            MultipartFile file = schoolDto.getFile();
            if (file != null && !file.isEmpty()) {
                // Si hay un archivo nuevo, actualizamos la imagen
                Image img = imageService.updateImage(file, dbSchool.getImage().getId());
                dbSchool.setImage(img);
            }
            // Si no hay archivo, mantenemos la imagen existente

            School requestSchool = schoolRepository.save(dbSchool);

            return Optional.ofNullable(requestSchool);         
        } 
        
        return Optional.empty();  
    }

    public void remove(Long id) {
        Optional<School> schoolOptional = schoolRepository.findById(id);

        if (schoolOptional.isPresent()) {
            School school = schoolOptional.orElseThrow();

            schoolRepository.deleteById(id);

            imageService.removeImagen(school.getImage().getId());
        }
    }

}
