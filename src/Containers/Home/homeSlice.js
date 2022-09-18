import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {addProducts} = homeSlice.actions

export const selectProducts = (state) => state.products.products

export default homeSlice.reducer;