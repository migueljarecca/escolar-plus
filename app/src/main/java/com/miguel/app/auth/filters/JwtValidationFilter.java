package com.miguel.app.auth.filters;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import static com.miguel.app.auth.filters.TokenJwtConfig.SECRET_KEY;
import static com.miguel.app.auth.filters.TokenJwtConfig.PREFIX_TOKEN;
import static com.miguel.app.auth.filters.TokenJwtConfig.HEADER_AUTHORIZATION;



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

        String header = request.getHeader(HEADER_AUTHORIZATION);

        if (header == null || !header.startsWith(PREFIX_TOKEN)) {
            chain.doFilter(request, response);
            // Si el header no tiene el token nos regresamos
            return;
        }

        String token = header.replace(PREFIX_TOKEN, "");
        // byte[] tokenDecodeBytes = Base64.getDecoder().decode(token);
        // String tokenDecode = new String(tokenDecodeBytes);
        // String[] tokenArr = tokenDecode.split("\\.");
        // String tokenSecret = tokenArr[0];
        // String email = tokenArr[1];

        // DECIMO PASO cambiamos el if por try catch
        Jws<Claims> jws;

        try {
            // Verificamos si la firma es igual
            jws = Jwts
                .parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token);

            String email = jws.toString();

            
            // List<GrantedAuthority> authorities = new ArrayList<>();
            // authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

            // TRECEAVO PASO. crear la clase SimpleGrantedAuthorityJsonCreator
            // Comentar y cambiar los authorityes
            Object authoritiesClaims = jws.getPayload().get("authorities", Object.class);

            Collection<? extends GrantedAuthority> authorities = Arrays
            .asList(new ObjectMapper()
            .addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class)
                .readValue(authoritiesClaims.toString().getBytes(), SimpleGrantedAuthority[].class));


            UsernamePasswordAuthenticationToken authentication = 
                new UsernamePasswordAuthenticationToken(email, null, authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);
            
            chain.doFilter(request, response);
        } catch (JwtException e){
            
            Map<String, String> body = new HashMap<>();
            body.put("message", "El token JWT no es válido");
            body.put("error", e.getMessage());

            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(403);
            response.setContentType("aplication/json");
        }
    }

    
    
}
