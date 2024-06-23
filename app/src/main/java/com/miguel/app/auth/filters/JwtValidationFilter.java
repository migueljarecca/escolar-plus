package com.miguel.app.auth.filters;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// CUARTO PASO Validación - Authenticación
public class JwtValidationFilter extends BasicAuthenticationFilter {

    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    // Este filtro se aplica en cada Request
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
        HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            // Si el header no tiene el token nos regresamos
            return;
        }

        String token = header.replace("Bearer ", "");
        byte[] tokenDecodeBytes = Base64.getDecoder().decode(token);
        String tokenDecode = new String(tokenDecodeBytes);

        String[] tokenArr = tokenDecode.split(".");

        String tokenSecret = tokenArr[0];
        String email = tokenArr[1];

        if ("token_creado_por_mi.".equals(tokenSecret)) {
            
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

            UsernamePasswordAuthenticationToken authentication = 
                new UsernamePasswordAuthenticationToken(email, authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            chain.doFilter(request, response);
        } else {
            
            Map<String, String> body = new HashMap<>();
            body.put("message", "El token JWT no es válido");

            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(403);
            response.setContentType("aplication/json");
        }
    }

    
    
}
