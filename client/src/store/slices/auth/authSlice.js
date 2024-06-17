import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        login: initialLogin, 
    },

    reducers: {
        onLogin: (state, action) => {
            state.login = {
                ...action.payload,
                isAuth: true,
            }
        },
        onLogout: (state, action) => {
            state.login = {
                isAuth: false,
                isAdmin: false,
                user: undefined,
            }
        }
    }
});

export const {

    onLogin,
    onLogout,
    
} = authSlice.actions;