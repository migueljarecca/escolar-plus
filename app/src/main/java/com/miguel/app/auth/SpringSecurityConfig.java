package com.miguel.app.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.miguel.app.auth.filters.JwtAuthenticationFilter;
import com.miguel.app.auth.filters.JwtValidationFilter;

//Primer paso para security crear los filtros
@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;
    
    // Encripta la contraseña que ingresa el usuario
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(andRules -> andRules
            .requestMatchers(HttpMethod.GET, "/users").permitAll()
            // CATORCEAVO PASO añadir reglas de acceso
            .requestMatchers(HttpMethod.GET, "/users/{id}").hasAnyRole("USER", "ADMIN")
            .requestMatchers(HttpMethod.POST, "/users").permitAll()
            .requestMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("ADMIN")
            .requestMatchers(HttpMethod.PUT, "/users/{id}").hasRole("ADMIN")
            .anyRequest().authenticated())

            // Se agrega después de crear JwtAuthenticationFilter
            // Es filtro para el login
            .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))
            // Se agrega despues de teminar JwtValidationFilter
            .addFilter(new JwtValidationFilter(authenticationConfiguration.getAuthenticationManager()))
            
            .csrf(config -> config.disable()) //cuando usamos apiREST se desabilita csrf
            
            .sessionManagement(management -> 
                management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
    }
}
