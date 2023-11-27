package com.red.red.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.red.red.Service.UserService;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    UserService userService;
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(userService)
            .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        return http 
            .csrf(csrf ->
                csrf
                .disable())
            
            .authorizeHttpRequests(authRequest ->
                authRequest
                    .requestMatchers("/").permitAll()
                    .requestMatchers("/user/**").permitAll()
                    .anyRequest().authenticated()
                    )  
             
            .formLogin(withDefaults())
            
            .build();
    }
}
