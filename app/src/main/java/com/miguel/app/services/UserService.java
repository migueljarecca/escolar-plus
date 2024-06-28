package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.dto.UserDto;
import com.miguel.app.models.entities.Role;
import com.miguel.app.models.entities.User;
import com.miguel.app.models.mapper.UserDtoMapper;
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

    // DTO -- TERCER PASO --  cambiar todo lo que devuelve por UserDto
    @Transactional(readOnly = true)
    public List<UserDto> findAllUser() {
        List<User> users = userRepository.findAll();
        return users
            .stream()
            .map(u -> UserDtoMapper.builder().setUser(u).build())
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Optional<UserDto> findByIdUser(Long id) {
        Optional<User> userOptional = userRepository.findById(id);

        if (userOptional.isPresent()) {
            return Optional.of(
                UserDtoMapper
                .builder()
                .setUser(userOptional.orElseThrow())
                .build()
            );
        } else {
            return Optional.empty();
        }
    
    }

    // QUINTO PASO en security encriptar la contraseña
    @Transactional
    public UserDto create(User user) {
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);

        //ONCEAVO PASO. crear el repo de ROLE, traer y seteamos al usuario
        Optional<Role> roleOptional = roleRepository.getRoleByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();

        if (roleOptional.isPresent()) {
            roles.add(roleOptional.orElseThrow());
        }

        user.setRoles(roles);

        return UserDtoMapper.builder().setUser(userRepository.save(user)).build();
    }

    @Transactional
    public Optional<UserDto> update(User user, Long id) {

        Optional<User> userOptional = userRepository.getUserById(id);

        if (userOptional.isPresent()) {
            User userDb = userOptional.orElseThrow();
            userDb.setName(user.getName());
            userDb.setLastname(user.getLastname());
            userDb.setEmail(user.getEmail());

            User user1 = userRepository.save(userDb);

            return Optional.ofNullable(UserDtoMapper.builder().setUser(user1).build());
        }
    
        return Optional.empty();
    }

    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }
}
