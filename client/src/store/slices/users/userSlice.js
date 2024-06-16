import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: 'users',
    initialState: {
        users: []
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
            state.users = action.payload
        },
    }
});

export const {
    addToUser,
    removeToUser,
    updateToUser,
    loadingToUsers,

} = userSlice.actions;