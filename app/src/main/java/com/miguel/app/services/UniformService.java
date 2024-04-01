package com.miguel.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.Uniform;
import com.miguel.app.resopitories.UniformRepository;

@Service
public class UniformService {
    
    @Autowired
    private UniformRepository uniformRepository;

    @Transactional(readOnly = true)
    public List<Uniform> findAllUniform() {
        return uniformRepository.findAll();
    }


}
