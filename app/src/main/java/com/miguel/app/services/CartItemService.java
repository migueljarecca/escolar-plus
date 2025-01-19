package com.miguel.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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

    @Transactional(readOnly = true)
    public List<CartItem> finCartItemsByUserId(Long userId) {
        return cartItemRepository.getCartByUserId(userId);
    } 

    @Transactional
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
    
    @Transactional
    public List<CartItem> saveCartItems(List<CartItemDto> cartItemDtos) {

        List<CartItem> saveCartItems = new ArrayList<>();

        for(CartItemDto cartItemDto: cartItemDtos) {
            CartItem cartItem = new CartItem();

            cartItem.setId(cartItemDto.getId());
            cartItem.setPrice(cartItemDto.getPrice());
            cartItem.setProduct(cartItemDto.getProduct());
            cartItem.setSize(cartItemDto.getSize());
            cartItem.setGender(cartItemDto.getGender());
            cartItem.setUserId(cartItemDto.getUserId());
            cartItem.setSchoolId(cartItemDto.getSchoolId());

            // Procesar y asociar la imagen si existe
            MultipartFile file = cartItemDto.getFile();
            if (file != null && !file.isEmpty()) {
                Image image = imageService.createImage(file);
                cartItem.setImage(image);
            }

            CartItem savCartItem = cartItemRepository.save(cartItem);

            saveCartItems.add(savCartItem);
        }

        return saveCartItems;
    }

    @Transactional
    public void deleteCartItem(Long id) {
        Optional<CartItem> optional = cartItemRepository.findById(id);

        if (optional.isPresent()) {
            CartItem cartItem = optional.orElseThrow();

            cartItemRepository.deleteById(id);

            imageService.removeImagen(cartItem.getImage().getId());
        }

    }

    @Transactional(readOnly = true)
    public Optional<CartItem> findCartItemById(Long id) {
        return cartItemRepository.findById(id);
    }
}
