package com.miguel.app.auth.filters;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;

public interface TokenJwtConfig {

    // OCTAVO PASO. cambiamos nuestro token statico por JWT
    // agregamos dependencia
    // remplazamos al nuevo token

    SecretKey key = Jwts.SIG.HS256.key().build();
    
    // public final static String SECRET_KEY = "token_creado_por_mi";
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String HEADER_AUTHORIZATION = "Authorization";

    public final SecretKey SECRET_KEY = key;
}
