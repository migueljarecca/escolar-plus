package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// TERCER PASO traemos el email de la base de datos para comparar
@Service
public class JpaUserDetailsService implements UserDetailsService{

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        
        if (!email.equals("user2@gmail.com")) {
            throw new UnsupportedOperationException("el useremail no existe");
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        return new User(email, "12345", true, true, true, true, authorities);
    }
    
}
