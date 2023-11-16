package com.red.red.Service;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import com.red.red.entidades.User;
import com.red.red.repositorio.UserRepository;

public class UserService {

    @Autowired
    UserRepository userRepository;
    
    public void created (String name, String lastName, String email, String password) {

        User user = new User();

        user.setName(name);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setDate(new Date());

        userRepository.save(user);  
    }
}
