import { createSlice } from "@reduxjs/toolkit";

export const initialUserForm = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    password: '',
}

export const userSlice = createSlice({

    name: 'users',
    initialState: {
        users: [],
        initialUserForm: initialUserForm,
        isLoading: true,
    },

    reducers: {
        addToUser: (state, action) => {
            state.users = [
                ...state.users, {
                    ...action.payload
                }
            ]
        },
        updateToUser: (state, action) => {
            console.log('contrl de action ' +JSON.stringify(action.payload))
            state.users = state.users.map(item => {
                if (item.id == action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return item;
            })
        },
        removeToUser: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload);
        },
        loadingToUsers: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
    }
});

export const {
    addToUser,
    removeToUser,
    updateToUser,
    loadingToUsers,
    isLoading,

} = userSlice.actions;