import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice = createSlice({

    name: 'wishlist',
    initialState: {
        wishlist: [],
    },
    
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist = [
                ...state.wishlist, {
                    ...action.payload
                }
            ]
        },
        removeToWishlist: (state, action) => {
            console.log("control de id " +action.payload);

            state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
            // state.wishlist = []
        }
    }
}); 

export const {


    addToWishlist,
    removeToWishlist,

} = wishlistSlice.actions;
    
