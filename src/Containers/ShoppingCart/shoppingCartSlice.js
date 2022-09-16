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
            state.cart.filter((cart) => cart.id !== action.payload)
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions

export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer