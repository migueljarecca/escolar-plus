package com.miguel.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguel.app.models.entities.User;
import com.miguel.app.resopitories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void create(String name, String lastname, String email, String password) {

        User user = new User();

        user.setName(name);
        user.setLastname(lastname);
        user.setEmail(email);
        user.setPassord(password);

        userRepository.save(user);
    }

    
}
