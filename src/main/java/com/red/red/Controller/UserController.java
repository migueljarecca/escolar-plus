package com.red.red.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.red.red.Service.UserService;
import com.red.red.exception.MyException;

@Controller
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    UserService userService;

    @GetMapping("/to-register")
    public String toRegister() {
        return "user_form";
    }

    @PostMapping("/register")
    public String register(@RequestParam String name, @RequestParam String lastName,
                        @RequestParam String email, @RequestParam String password,
                        @RequestParam String password2, MultipartFile archive,
                        ModelMap model) {

        System.out.println("--------------" +name);
        System.out.println("--------------" +email);                    
        System.out.println("--------------" +password);                    
        System.out.println("--------------");                    
                    
         
        try {
            userService.created(name, lastName, email, password, password2, archive);
            model.put("exitUser", "se registro correctamente");
        } catch (MyException e) {
            model.put("errorUser", e.getMessage());      
            return "user_form";
        }  
        
        return "redirect:/";  
            
    }

}
