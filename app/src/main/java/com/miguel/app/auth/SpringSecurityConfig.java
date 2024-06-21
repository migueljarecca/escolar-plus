package com.miguel.app.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.miguel.app.auth.filters.JwtAuthenticationFilter;

//Primer paso para security crear los filtros
@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(andRules -> andRules
            .requestMatchers(HttpMethod.GET, "/users").permitAll()
            .anyRequest().authenticated())

            // Se agrega después de crear JwtAuthenticationFilter
            // Es filtro para el login
            .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))

            .csrf(config -> config.disable()) //cuando usamos apiREST se desabilita csrf
            
            .sessionManagement(management -> 
                management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
}
