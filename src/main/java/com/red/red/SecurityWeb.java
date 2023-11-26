package com.red.red;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityWeb {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authRequest -> 
                authRequest
                    .requestMatchers("/public/**").permitAll()
                    .anyRequest().authenticated()
        
               )
            .formLogin((login)->login
                    .loginPage("/login")
                    .usernameParameter("")
                )
            .logout((logout)->logout
                    .logoutUrl("/logout")
                )
            .csrf((csrf)-> csrf.disable());

        return http.build();
    }
    
}