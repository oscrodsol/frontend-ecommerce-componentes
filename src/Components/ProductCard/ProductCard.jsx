import React from "react";
import './ProductCard.scss'

const ProductCard = props => {
    
    return (
        <div className="ProductCard">
            <div className="film">
                <strong className="ntitulo">{props.data.name}</strong><br></br>
                <br></br><img className="portadas" src={props.data.image}></img><br></br>
                <strong>Descripcion:</strong> {props.data.description}<br></br> 
                <strong>Precio:</strong> {props.data.price} 
                
            </div>
        </div>
    )
}

export default ProductCard