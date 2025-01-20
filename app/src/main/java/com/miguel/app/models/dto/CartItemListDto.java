package com.miguel.app.models.dto;

import java.util.List;

public class CartItemListDto {
    
    private List<CartItemDto> cartItemDtos;

    public List<CartItemDto> getCartItemDtos() {
        return cartItemDtos;
    }

    public void setCartItemDtos(List<CartItemDto> cartItemDtos) {
        this.cartItemDtos = cartItemDtos;
    }

}
