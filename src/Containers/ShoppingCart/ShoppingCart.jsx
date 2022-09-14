import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "../../Components/ProductCard/ProductCard"
import { selectCart } from './shoppingCartSlice'
import './ShoppingCart.scss'

const Cart = props => {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    console.log(cart);
    return (
        <div className="Cart">
            <h1>Carrito</h1>
            {
                cart?.map((product, index) => (
                    <ProductCard key={index} data={product} btn="0" />
                ))
            }
        </div>
    )
}

export default Cart