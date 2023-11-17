package com.red.red.Service;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.red.red.entidades.ImgUser;
import com.red.red.entidades.User;
import com.red.red.exception.MyException;
import com.red.red.repositorio.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ImgUserService imgUserService;
    
    @Transactional
    public void created(String name, String lastName, String email, String password, 
                        String password2, MultipartFile archive) throws MyException {

        validate(name, lastName, email, password, password2);

        User user = new User();

        user.setName(name);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setDate(new Date());

        ImgUser imgUser = imgUserService.create(archive);

        user.setImgUser(imgUser);                    

        userRepository.save(user);  
    }

    public void validate(String name, String lastName, String email, String password, 
                        String password2) throws MyException{

        if (name.isEmpty() || name == null) {
            throw new MyException("el nombre no puede ser nulo o estar vacío");
        }
        if (lastName.isEmpty() || lastName == null) {
            throw new MyException("el apellido no puede ser nulo o estar vacío");
        }
        if (email.isEmpty() || email == null) {
            throw new MyException("el email no puede ser nulo o estar vacio");
        }
        if (password.isEmpty() || password == null || password.length() <= 5) {
            throw new MyException("La contraseña no puede estar vacía, y debe tener más de 5 dígitos");
        }

        if (!password.equals(password2)) {
            throw new MyException("Las contraseñas ingresadas deben ser iguales");
        }
    }
}
