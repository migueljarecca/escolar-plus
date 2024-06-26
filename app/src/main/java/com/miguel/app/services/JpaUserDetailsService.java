package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miguel.app.models.entities.User;
import com.miguel.app.resopitories.UserRepository;

// TERCER PASO traemos el email de la base de datos para comparar
@Service
public class JpaUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true) //cuando usamos JPA importante el transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        
        // SEPTIMO PASO logeamos con JPA. antes estaba de forma estática
        Optional<User> userOptional = userRepository.getUserByEmail(email);

        if (!userOptional.isPresent()) {
            throw new UnsupportedOperationException("el useremail no existe");
        }

        User user = userOptional.orElseThrow();

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        return new org.springframework.security.core.userdetails.User(
            user.getEmail(), // cambia con el paso siete
            user.getPassword(), // cambia con el paso siete
            true,
            true,
            true,
            true,
            authorities);
    }
    
}
