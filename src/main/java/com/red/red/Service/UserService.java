package com.red.red.Service;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.red.red.entity.ImgUser;
import com.red.red.entity.User;
import com.red.red.enums.Rol;
import com.red.red.exception.MyException;
import com.red.red.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService implements UserDetailsService {

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
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        user.setDate(new Date());
        user.setRol(Rol.USER);

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

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    
        User user = userRepository.findByEmail(email);
        System.out.println("############ " +user);

        if (user != null) {
            System.out.println("************** dentro del if" + user);
        
            List<GrantedAuthority> permissions = new ArrayList<>();
    
            GrantedAuthority p = new SimpleGrantedAuthority("ROLE_" + user.getRol().toString());
            permissions.add(p);

            System.out.println("**********granted authority " +permissions);
            System.out.println("************* " +user.getEmail());
            System.out.println("************* " +user.getPassword());

            User user1 = new User(user.getEmail(), user.getPassword(), permissions);
            System.out.println("------------ " +user1) ;
            return new User(user.getEmail(), user.getPassword(), permissions);

        } else {
            return null;
        }
    }
}
