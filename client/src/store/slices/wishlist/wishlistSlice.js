import { createSlice } from "@reduxjs/toolkit";

const initialWishlistData = JSON.parse(sessionStorage.getItem('wishlist')) || [];

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

        }
    }
}); 

export const {

    addToWishlist,
    removeToWishlist,

} = wishlistSlice.actions;
    
