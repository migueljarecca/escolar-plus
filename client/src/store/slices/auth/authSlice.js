import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
}

export const initialUser = JSON.parse(sessionStorage.getItem('user')) || {
    userLogged: undefined
}

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        login: initialLogin, 
        user: initialUser,
    },

    reducers: {
        onLogin: (state, action) => {
            state.login = {
                ...action.payload,
                isAuth: true,
            }
        },
        onLogout: (state) => {
            state.login = {
                isAuth: false,
                isAdmin: false,
            }
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = undefined;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        }

    }
});

export const {

    onLogin,
    onLogout,
    addUser,
    removeUser,
    updateUser,

} = authSlice.actions;