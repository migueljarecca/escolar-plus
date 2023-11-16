package com.red.red.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.red.red.entidades.ImgUser;
import com.red.red.repositorio.ImgUserRepository;

@Service
public class ImgUserService {
    
    @Autowired
    ImgUserRepository imgUserRepository;

    public void create(MultipartFile archive) {

        if (archive != null) {
            try {
            
            ImgUser imgUser = new ImgUser();

            imgUser.setMime(archive.getContentType());
            imgUser.setImgName(archive.getName());
            imgUser.setContent(archive.getBytes());

            imgUserRepository.save(imgUser);

            } catch (Exception e) {
                System.err.println(e.getMessage());
            }

        } else {
            
        }
    }
}
