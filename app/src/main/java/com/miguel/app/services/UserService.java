package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.User;
import com.miguel.app.resopitories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User create(User user) {

        // User user = new User();

        // user.setName(name);
        // user.setLastname(lastname);
        // user.setEmail(email);
        // user.setPassord(password);

        userRepository.save(user);
        return user;
    }

    @Transactional(readOnly = true)
    public List<User> findAllUser() {
        List<User> users = new ArrayList<>();
        users = userRepository.findAll();
        return users;
    }

    @Transactional(readOnly = true)
    public Optional<User> findByIdUser(Long id) {
        //Como devuelve un optional, añadimos el .orElseThrow()
        return userRepository.findById(id);
    }

    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }
}
