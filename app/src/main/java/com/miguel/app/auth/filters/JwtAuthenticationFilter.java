package com.miguel.app.auth.filters;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.miguel.app.models.entities.User;
import com.miguel.app.resopitories.UserRepository;

import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// SEGUNDO PASO crear para poder logearnos
// UsernamePasswordAuthenticationFilter -> esto por debajo maneja una ruta post con
// la ruta login
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter implements TokenJwtConfig {

    private AuthenticationManager authenticationManager;

    private UserRepository userRepository;

    //creamos el constructor
    public JwtAuthenticationFilter (AuthenticationManager authenticationManager, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
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

            //validamos si el correo existe

            Optional<User> uOptional = userRepository.getUserByEmail(email);

            if (!uOptional.isPresent()) {
                throw new AuthenticationException("El correo ingresado no es válido") {
                    
                };
            }

        } catch (StreamReadException e) {
            e.printStackTrace();
        } catch (DatabindException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Aqui se usa UserDetailsService por dentro
        // Reallizamos la autenticacion
        UsernamePasswordAuthenticationToken authToken = 
            new UsernamePasswordAuthenticationToken(email, password);
            
        return authenticationManager.authenticate(authToken);        
    }

    @Override
    @Transactional(readOnly = true)
    protected void successfulAuthentication(HttpServletRequest request,
            HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException, ServletException {
 
        // Recuperamos el email del authResult       
        String email =((org.springframework.security.core.userdetails.User) 
            authResult.getPrincipal()).getUsername();

        // TRECEAVO PASO. añadimos los roles al token    
        Collection<? extends GrantedAuthority> roles = authResult.getAuthorities(); 
    
        boolean isAdmin = roles.stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));

        // Este token superficial lo comentamos
        // String originalInput = SECRET_KEY +"." + email;
        // String token = Base64.getEncoder().encodeToString(originalInput.getBytes());
        
        // NOVENO PASO creamos el nuevo token
        // Creamos el token jws
            String token = Jwts.builder()
                    //new ObjectMapper convertimos a json
                    .claim("authorities", new ObjectMapper().writeValueAsString(roles))
                    .claim("isAdmin", isAdmin)
                    .subject(email)
                    .signWith(SECRET_KEY)
                    .issuedAt(new Date())
                    .expiration(new Date(System.currentTimeMillis() + 3600000))
                    .compact(); 

        response.addHeader(HEADER_AUTHORIZATION, PREFIX_TOKEN + token);

        Optional<User> userOptional = userRepository.getUserByEmail(email);
        System.out.println("control de user " +userOptional);

        User userDB = new User();

        if (userOptional.isPresent()) {
            userDB = userOptional.orElseThrow();
        }

        Map<String, Object> body = new HashMap<>();
        body.put("token",token);
        body.put("message", String.format("Hola %s, has iniciado sesion con exito", email)); 
        body.put("userId", userDB.getId());
        body.put("email", email);
        body.put("lastname", userDB.getLastname());
        body.put("name", userDB.getName());

        //Escribimos al cuerpo y lo convertimos a JSON
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");

    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException failed) throws IOException, ServletException {

        Map<String, Object> body = new HashMap<>();

        String errorMessage = "";

        if (failed.getMessage().equals("El correo ingresado no es válido")) {
            errorMessage = "El correo ingresado no es válido";
        }

        body.put("message", "Error en la autenticacion");
        body.put("errorEmail", errorMessage);
        body.put("errorPassword", "Contraseña incorrecta");

        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(401);
        response.setContentType("application/json");
    }
    
}
