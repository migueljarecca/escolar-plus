import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    userLogin: undefined,
}

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        login: initialLogin, 
        user: undefined,
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
                useremail: undefined,
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