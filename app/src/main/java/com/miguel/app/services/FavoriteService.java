package com.miguel.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.dto.FavoriteDto;
import com.miguel.app.models.entities.Favorite;
import com.miguel.app.models.entities.Image;
import com.miguel.app.resopitories.FavoriteRepository;

@Service
public class FavoriteService {

    @Autowired
    private ImageService imageService;

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Transactional
    public Favorite createFavorite (FavoriteDto favoriteDto) {

        Favorite favori = new Favorite();

        favori.setId(favoriteDto.getId());
        favori.setPrice(favoriteDto.getPrice());
        favori.setProduct(favoriteDto.getProduct());
        favori.setSize(favoriteDto.getSize());
        favori.setGender(favoriteDto.getGender());

        favori.setUserId(favoriteDto.getUserId());
        favori.setSchoolId(favoriteDto.getSchoolId());

        MultipartFile file = favoriteDto.getFile();
        Image image = imageService.createImage(file);

        favori.setImage(image);

        return favoriteRepository.save(favori);
    }

    @Transactional
    public void DeleteFavorite (Long id) {

        Optional<Favorite> fOptional = favoriteRepository.findById(id);

        if (fOptional.isPresent()) {

            Favorite favorite = fOptional.orElseThrow();
            
            favoriteRepository.deleteById(id);

            imageService.removeImagen(favorite.getImage().getId());
        }
    }

    @Transactional(readOnly = true)
    public List<Favorite> findFavoritesByUserId (Long userId) {
        return favoriteRepository.getFavoritesByUserId(userId);
    }

    @Transactional(readOnly = true)
    public Optional<Favorite> findFavoriteById(Long id) {
        return favoriteRepository.findById(id);
    }

}
