import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../containers/ShoppingCart/shoppingCartSlice'
import './ProductCard.scss'

const ProductCard = props => {
    const dispatch = useDispatch()
    
    return (
        <div className="ProductCard">
            <div className="product">
                <strong className="name">{props.data.name}</strong><br></br>
                <br></br><img className="image" src={props.data.image}></img><br></br>
                <strong>Descripcion:</strong> {props.data.description}<br></br> 
                <strong>Precio:</strong> {props.data.price} <br></br>
                {props.btn != '0' &&
                <button className="addBtn" onClick={()=>{dispatch(addToCart(props.data))}}>Al carrito</button>
            }
            </div>
        </div>
    )
}

export default ProductCard