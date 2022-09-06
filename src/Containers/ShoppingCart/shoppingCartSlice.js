import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions

export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer