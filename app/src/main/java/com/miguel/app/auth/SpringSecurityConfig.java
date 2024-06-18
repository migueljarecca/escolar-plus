package com.miguel.app.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//Primer paso para security crear los filtros
@Configuration
public class SpringSecurityConfig {
    
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(andRules -> andRules
            .requestMatchers(HttpMethod.GET, "/users").permitAll()
            .anyRequest().authenticated())

            .csrf(config -> config.disable()) //cuando usamos apiREST se desabilita csrf
            
            .sessionManagement(management -> 
                management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
}
