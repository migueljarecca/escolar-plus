package com.red.red.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.red.red.Service.UserService;

@Controller
@RequestMapping("img-user")
public class ImgUserController {

    @Autowired
    UserService userService;
    
    @GetMapping("/profile/{id}")
    public ResponseEntity<byte[]> imgUser(@PathVariable String id){
    //    User user = userService.getOne(id);
        
    //    byte[] imagen= user.getImagen().getContenido();
       
       HttpHeaders headers = new HttpHeaders();
       
       headers.setContentType(MediaType.IMAGE_JPEG);
       
       return  null; //new ResponseEntity<>(imagen,headers, HttpStatus.OK); 
    }   
}
