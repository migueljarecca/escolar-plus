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
    public Optional<User> update(User user, Long id) {

        Optional<User> userOptional = findByIdUser(id);

        if (userOptional.isPresent()) {
            User userDb = userOptional.orElseThrow();
            userDb.setName(user.getName());
            userDb.setLastname(user.getLastname());
            userDb.setEmail(user.getEmail());

            User user1 = create(userDb);

            return Optional.ofNullable(user1);
        }
    
        return Optional.empty();
    }

    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }
}
