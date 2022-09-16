import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "../../Components/ProductCard/ProductCard"
import { selectCart, removeFromCart } from './shoppingCartSlice'
import './ShoppingCart.scss'

const Cart = props => {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    console.log(cart);
    return (
        <div className="Cart">
            <h1>Carrito</h1>
            {props.btn != '0' &&
                <button className="addBtn" onClick={()=>{dispatch(removeFromCart(props.data))}}>Limpiar carrito</button>
            }
            {
                cart?.map((product, index) => (
                    <ProductCard key={index} data={product} btn="0" />
    
                ))
            }
        </div>
    )
}

export default Cart