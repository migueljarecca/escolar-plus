package com.miguel.app.models.dto;

import java.util.List;

public class FavoriteListDto {
    
    private List<FavoriteDto> favorites;

    // Getters y setters
    public List<FavoriteDto> getFavorites() {
        return favorites;
    }

    public void setFavorites(List<FavoriteDto> favorites) {
        this.favorites = favorites;
    }
}
