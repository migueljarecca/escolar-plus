package com.red.red;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
// @EnableMethodSecurity
public class SecurityWeb {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
        .authorizeHttpRequests((authz) -> authz
        .requestMatchers(new AntPathRequestMatcher( "/css/*")).permitAll()
        

        .anyRequest().authenticated()
        
               ).formLogin((login)->login
                    .loginPage("/login")
                    .usernameParameter("")
            ).logout((logout)->logout
                    .logoutUrl("/logout")
            ).csrf((csrf)-> csrf.disable());

        return http.build();
    }
    
}