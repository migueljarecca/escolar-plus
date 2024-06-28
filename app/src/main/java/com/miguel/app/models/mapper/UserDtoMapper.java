package com.miguel.app.models.mapper;

import com.miguel.app.models.dto.UserDto;
import com.miguel.app.models.entities.User;

// DTO -- PASO DOS -- cargamos el userDto

public class UserDtoMapper {
    
    private static UserDtoMapper mapper;
    private User user;

    private UserDtoMapper() {
    }

    public static UserDtoMapper builder() {
        mapper = new UserDtoMapper();
        return mapper;
    }

    public UserDtoMapper setUser(User user) {
        this.user = user;
        return mapper;
    }

    public UserDto build() {
        if (user == null) {
            throw new RuntimeException("Debe pasar el entity user!");
        }

        UserDto userDto = new UserDto(this.user.getId(), user.getName(), user.getEmail());
        return userDto;
    }

}
