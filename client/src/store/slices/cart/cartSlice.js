import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({

    name: 'cart',
    initialState: {
        cart: [],
        priceTotal: 0,
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
                            ...item,
                            quantity: item.quantity + 1 
                        }
                    }
                    return item;
                })
            } else {
                //Si el producto no esta en el carro
                state.cart = [
                    ...state.cart, {
                        ...action.payload,
                        quantity: 1
                    }

                ];
                }
        },
        removeCart: (state, action) => {
            console.log('eliminar id ' +action.payload);
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        calculateTotal: (state) => {
            state.priceTotal = state.cart.map(items => items.price * items.quantity)
            .reduce((acumulador, currentAcumulator) => acumulador + currentAcumulator, 0);
        },
        updateIncreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
        },
        updateDecreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            })
        },
    }
});

export const {
    addToCart,
    clearCart,
    removeCart,
    calculateTotal,
    updateIncreaseQuantity,
    updateDecreaseQuantity,

} = cartSlice.actions;