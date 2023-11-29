package com.red.red.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @PostMapping(value="logins")
    public String logins() {

        return "Login from public endpoint";
    }
       
    @PostMapping(value="registesr")
    public String registers() {

        return "Register from public endpoint";
    }    
    
}
