import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cart: []
            }
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions

export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer