import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
}

export const initialUser = JSON.parse(sessionStorage.getItem('user')) || {
    userLogged: null
}

export const initialErrorLogin = {
    email: '',
    password: '',
}

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        login: initialLogin, 
        user: initialUser,
        errorLoginBackend: initialErrorLogin,
    },

    reducers: {
        onLogin: (state, action) => {
            state.login = {
                isAuth: true,
                isAdmin: action.payload
            }
        },
        onLogout: (state) => {
            state.login = {
                isAuth: false,
                isAdmin: false,
            }
            state.user = {userLogged: null};
            state.errorLoginBackend = initialErrorLogin;

        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = undefined;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthErrors: (state, action) => {
            state.errorLoginBackend = action.payload;
        }

    }
});

export const {

    onLogin,
    onLogout,
    addUser,
    removeUser,
    updateUser,
    setAuthErrors,

} = authSlice.actions;