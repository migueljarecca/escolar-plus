package com.miguel.app.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

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

            .requestMatchers(HttpMethod.GET, "/schools").permitAll()
            .requestMatchers(HttpMethod.POST, "/schools").hasAnyRole("ADMIN")
            .requestMatchers(HttpMethod.DELETE, "/schools/{id}").hasAnyRole("ADMIN")
            .requestMatchers(HttpMethod.PUT, "/schools/{id}").hasAnyRole("ADMIN")
            
            .requestMatchers(HttpMethod.GET, "/uniforms").permitAll()
            .requestMatchers(HttpMethod.POST, "/uniforms").hasAnyRole("ADMIN")
            .requestMatchers(HttpMethod.DELETE, "/uniforms/{id}").hasAnyRole("ADMIN")
            .requestMatchers(HttpMethod.PUT, "/uniforms/{id}").hasAnyRole("ADMIN")

            .requestMatchers(HttpMethod.GET, "/uniforms/by-school/{id}").permitAll()

            .anyRequest().authenticated())

            // Se agrega después de crear JwtAuthenticationFilter
            // Es filtro para el login
            .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))
            // Se agrega despues de teminar JwtValidationFilter
            .addFilter(new JwtValidationFilter(authenticationConfiguration.getAuthenticationManager()))
            
            .csrf(config -> config.disable()) //cuando usamos apiREST se desabilita csrf
            
            .sessionManagement(management -> 
                management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .cors(cors -> cors.configurationSource(corsConfigurationSource()))    

            .build();
    }

    // CONFIGURACION DE CORS -- último paso de spring security
    @Bean
    CorsConfigurationSource corsConfigurationSource () {

        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        config.setAllowedOriginPatterns(Arrays.asList("*"));
    
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);  

        return source;
    }

    @Bean
    FilterRegistrationBean <CorsFilter> corsFilter() {
        FilterRegistrationBean <CorsFilter> bean = new FilterRegistrationBean<>(
            new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;    
    }
}
