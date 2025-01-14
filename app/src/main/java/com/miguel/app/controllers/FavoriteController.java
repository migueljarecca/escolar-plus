package com.miguel.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.models.dto.FavoriteDto;
import com.miguel.app.models.entities.Favorite;
import com.miguel.app.services.FavoriteService;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/favorites")
@CrossOrigin(originPatterns = "*")
public class FavoriteController {
    
    @Autowired
    private FavoriteService favoriteService;

    @PostMapping
    public ResponseEntity<?> create(@ModelAttribute FavoriteDto favoriteDto) {

        System.out.println("CONTROL de id " +favoriteDto.getId());

        // Procesa el archivo aquí
        if (favoriteDto.getFile() != null) {
            System.out.println("ARCHIVO RECIBIDO:  " + favoriteDto.getFile().getOriginalFilename());
        }
        Favorite favorite = favoriteService.createFavorite(favoriteDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(favorite);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        System.out.println("CONTROL de id " +id);

        Optional<Favorite> fOptional = favoriteService.findFavoriteById(id);
        System.out.println("CONTROL de PRICE " +fOptional.get().getPrice());

        if (fOptional.isPresent()) {
            favoriteService.DeleteFavorite(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    } 

    @GetMapping("/by-user/{id}")
    public List<Favorite> getFavorities(@PathVariable Long id) {
        return favoriteService.findFavoritesByUserId(id);
    }
}
