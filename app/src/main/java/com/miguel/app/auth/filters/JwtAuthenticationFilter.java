package com.miguel.app.auth.filters;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.miguel.app.models.entities.User;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


// SEGUNDO PASO crear para poder logearnos
// UsernamePasswordAuthenticationFilter -> esto por debajo maneja una ruta post con
// la ruta login
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    //creamos el constructor
    public JwtAuthenticationFilter (AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        User user = null;
        String email = null;
        String password = null;        

        // Los datos bienen en forma de JSON    
        try {
            // Recuperamos los datos
            user = new ObjectMapper().readValue(request.getInputStream(), User.class);
            email = user.getEmail();
            password = user.getPassword();

            logger.info("email desde el request " +email);
            logger.info("password desde el request " +password);

        } catch (StreamReadException e) {
            e.printStackTrace();
        } catch (DatabindException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //Reallizamos la autenticacion
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(email, password);
        return authenticationManager.authenticate(authToken);        
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {

        // Recuperamos el email del authResult        
        String email =((org.springframework.security.core.userdetails.User) 
            authResult.getPrincipal()).getUsername();

        String originalInput = "token_creado_por_mi." + email;
        String token = Base64.getEncoder().encodeToString(originalInput.getBytes());
        
        response.addHeader("Authorization", "Bearer " + token);

        Map<String, Object> body = new HashMap<>();
        body.put("token",token);
        body.put("message", String.format("Hola %s, has iniciado sesion con exito", email)); 
        body.put("email", email);

        //Escribimos al cuerpo y lo convertimos a JSON
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");

    }



    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException failed) throws IOException, ServletException {

        Map<String, Object> body = new HashMap<>();
        body.put("message", "Erro en la autenticacion");
        body.put("error", failed.getMessage());

        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(401);
        response.setContentType("application/json");
    }
    
}
