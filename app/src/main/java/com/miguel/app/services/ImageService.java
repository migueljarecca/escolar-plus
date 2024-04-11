package com.miguel.app.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.entities.Image;
import com.miguel.app.resopitories.ImageResposiory;

@Service
public class ImageService {
    
    @Autowired
    private ImageResposiory imageResposiory;

    @Transactional
    public Image createImage(MultipartFile file) {

        if (file != null) {
            try {
                Image img = new Image();

                img.setMime(file.getContentType());
                img.setName(file.getOriginalFilename());
                img.setContent(file.getBytes());

                return imageResposiory.save(img);

            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
        return null;
    }

    @Transactional
    public Image updateImage(MultipartFile file, Long id) {

        if (file != null) {
            try {
                Image img = new Image();

                if (id != null) {
                    Optional<Image> imgOptional = imageResposiory.findById(id);

                    if (imgOptional.isPresent()) {
                        img = imgOptional.get();
                    }
                }

                img.setMime(file.getContentType());
                img.setName(file.getOriginalFilename());
                img.setContent(file.getBytes());

                return imageResposiory.save(img);

            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
        return null;
    }

    @Transactional
    public void removeImagen(Long id) {
        imageResposiory.deleteById(id);
    }
}
