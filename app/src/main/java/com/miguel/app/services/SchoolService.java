package com.miguel.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.School;
import com.miguel.app.resopitories.SchoolRepository;

@Service
public class SchoolService {
    
    @Autowired
    private SchoolRepository schoolRepository;

    @Transactional
    public School create(School school) {
        schoolRepository.save(school);
        return school;
    }

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
    public Optional<School> update(School school, Long id) {
        Optional<School> schoolOptional = schoolRepository.findById(id);

        if (schoolOptional.isPresent()) {
            School dbSchool = schoolOptional.orElseThrow();
            dbSchool.setName(school.getName());
            dbSchool.setAddress(school.getAddress());
            dbSchool.setSchoolCode(school.getSchoolCode());

            School requestSchool = schoolRepository.save(dbSchool);

            return Optional.ofNullable(requestSchool);         
        } 
        
        return Optional.empty();  
    }

    public void remove(Long id) {
        schoolRepository.deleteById(id);
    }
}
