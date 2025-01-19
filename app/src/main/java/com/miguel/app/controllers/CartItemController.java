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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miguel.app.models.dto.CartItemDto;
import com.miguel.app.models.entities.CartItem;
import com.miguel.app.services.CartItemService;

@RestController
@RequestMapping("/shop-cart")
@CrossOrigin(originPatterns = "*")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;
    
    @PostMapping
    public ResponseEntity<?> create(@ModelAttribute CartItemDto cartItemDto) {

        CartItem saveCartItem = cartItemService.createCartItem(cartItemDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(saveCartItem);
    }

    @PostMapping("/add-cart-item")
    public ResponseEntity<?> addCartItem(@ModelAttribute List<CartItemDto> cartItemDtos) {
        System.out.println("CONTROL DE INGRESO A LISTA DE favoritos response");

        for (int i = 0; i < cartItemDtos.size(); i++) {
            CartItemDto cartItemDto = cartItemDtos.get(i);

            System.out.println("Favorito #" + (i + 1));
            System.out.println("ID: " + cartItemDto.getId());
            System.out.println("Precio: " + cartItemDto.getPrice());
            System.out.println("Producto: " + cartItemDto.getProduct());
            System.out.println("Tamaño: " + cartItemDto.getSize());
            System.out.println("Género: " + cartItemDto.getGender());
            System.out.println("Usuario: " + cartItemDto.getUserId());
            System.out.println("Escuela: " + cartItemDto.getSchoolId());
            System.out.println("Archivo: " + cartItemDto.getFile().getOriginalFilename());
        }

        List<CartItem> saveCartItems = cartItemService.saveCartItems(cartItemDtos);

        return ResponseEntity.status(HttpStatus.CREATED).body(saveCartItems);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id) {

        Optional<CartItem> optional = cartItemService.findCartItemById(id);

        if (optional.isPresent()) {
            cartItemService.deleteCartItem(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/by-user/{id}")
    public List<CartItem> getCartItems(@PathVariable Long id) {
        return cartItemService.finCartItemsByUserId(id);
    }
}
