package com.miguel.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.miguel.app.models.dto.CartItemDto;
import com.miguel.app.models.entities.CartItem;
import com.miguel.app.models.entities.Image;
import com.miguel.app.resopitories.CartItemRepository;

@Service
public class CartItemService {

    @Autowired
    private ImageService imageService;

    @Autowired
    private CartItemRepository cartItemRepository;
    
    public CartItem createCartItem(CartItemDto cartItemDto) {

        CartItem cart = new CartItem();

        cart.setId(cartItemDto.getId());
        cart.setPrice(cartItemDto.getPrice());
        cart.setProduct(cartItemDto.getProduct());
        cart.setSize(cartItemDto.getSize());
        cart.setGender(cartItemDto.getGender());

        cart.setUserId(cartItemDto.getUserId());
        cart.setSchoolId(cartItemDto.getSchoolId());

        MultipartFile file = cartItemDto.getFile();
        Image image = imageService.createImage(file);

        cart.setImage(image);

        CartItem saveCartItem = cartItemRepository.save(cart);

        return saveCartItem;
    } 

}
