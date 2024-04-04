package com.miguel.app.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.entities.Image;
import com.miguel.app.resopitories.ImageResposiory;

@Service
public class ImageService {
    
    @Autowired
    private ImageResposiory imageResposiory;

    public Image createImage(MultipartFile file) {

        if (file != null) {
            try {
                Image img = new Image();

                img.setMime(file.getContentType());
                img.setName(file.getName());
                img.setConent(file.getBytes());

                return imageResposiory.save(img);

            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
        return null;
    }

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
                img.setName(file.getName());
                img.setConent(file.getBytes());

                return imageResposiory.save(img);

            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        }
        return null;
    }
}
