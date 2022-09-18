import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../containers/User/userSlice'
import cartSlice from '../Containers/ShoppingCart/shoppingCartSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice
    }
})