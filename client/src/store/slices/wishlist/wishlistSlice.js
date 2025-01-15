import { createSlice } from "@reduxjs/toolkit";

// const initialWishlistData = JSON.parse(sessionStorage.getItem('wishlist')) || [];
const initialWishlistData = [];

export const wishlistSlice = createSlice({

    name: 'wishlist',
    initialState: {
        wishlist: initialWishlistData,
    },
    
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist = [
                ...state.wishlist, {
                    ...action.payload
                }       
            ]
            sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist));

        },
        removeToWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
            sessionStorage.setItem('wishlist', JSON.stringify(state.wishlist));

        },
        loadingToWishlist: (state, action) => {
            state.wishlist = action.payload;
        },
        clearWishlist: (state) => {
            state.wishlist = [];
            // sessionStorage.removeItem('wishlist');
        },
    }
}); 

export const {

    addToWishlist,
    removeToWishlist,
    loadingToWishlist,
    clearWishlist,

} = wishlistSlice.actions;
    
