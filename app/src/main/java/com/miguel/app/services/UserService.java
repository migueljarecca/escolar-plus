package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.Role;
import com.miguel.app.models.entities.User;
import com.miguel.app.resopitories.RoleRepository;
import com.miguel.app.resopitories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public List<User> findAllUser() {
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<User> findByIdUser(Long id) {
        //Como devuelve un optional, añadimos el .orElseThrow()
        return userRepository.findById(id);
    }

    // QUINTO PASO en security encriptar la contraseña
    @Transactional
    public User create(User user) {
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);

        //ONCEAVO PASO. crear el repo de ROLE, traer y seteamos al usuario
        Optional<Role> roleOptional = roleRepository.getRoleByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (roleOptional.isPresent()) {
            roles.add(roleOptional.orElseThrow());
        }

        user.setRoles(roles);
        userRepository.save(user);
        return user;
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
