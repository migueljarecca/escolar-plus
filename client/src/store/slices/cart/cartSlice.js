import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({

    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {

            //Revisamos si el producto ya esta en el carro
            const productInCartIndex = state.cart.findIndex(item => item.id === action.payload.id);
            console.log('cntrol del slice ' +productInCartIndex);

            if(productInCartIndex >= 0) {
                
                state.cart = state.cart.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...action.payload,
                            quantity: action.payload.quantity + 1
                        }
                    }
                    return item;
                })
            }

            //Si el producto no esta en el carro
            state.cart = [
                ...state.cart, {
                    ...action.payload,
                    quantity: 1
                }

            ];
        },
        removeCart: (state, action) => {
            console.log('fered ' +action.id);
            state.cart = state.cart.filter(item => item.id !== action.id);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const {
    addToCart,
    clearCart,
    removeCart,

} = cartSlice.actions;