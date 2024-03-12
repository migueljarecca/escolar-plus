package com.miguel.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.models.entities.User;
import com.miguel.app.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(originPatterns = "*")
public class UserController {
    
    @Autowired
    UserService userService;

    //Traemos todos los usuarios
    @GetMapping
    public List<User> list() {
        return userService.findAllUser();
    }

    //traemos solo un usuario
    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id) {
        Optional<User> userOptional = userService.findByIdUser(id);

        //Realizamos la consulta si existe el usuario
        if (userOptional.isPresent()) {
            //Retornamos un estado ok. pasamos el usuario en el body
            return ResponseEntity.ok(userOptional.orElseThrow());
        }
        //Retornamos un estado 404. no encontro al usuario
        return ResponseEntity.notFound().build();
    }

    //Crear usuario
    @PostMapping
    public ResponseEntity<?> create(@RequestBody User user) {
        User userDb = userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDb);
    }

    //Actualizar usuario
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id ) {
        Optional<User> userOptional = userService.update(user, id);

        if (userOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(userOptional);
        }

        return ResponseEntity.notFound().build();
    }

    //Eliminar usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<User> userOptional = userService.findByIdUser(id);

        if (userOptional.isPresent()) {
            userService.remove(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

}
