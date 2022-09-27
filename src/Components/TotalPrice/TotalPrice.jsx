import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../containers/ShoppingCart/shoppingCartSlice'
import './TotalPrice.scss'

const TotalPrice = props => {
    const dispatch = useDispatch()

    console.log(props);

    let baseprice = 0;

    for (let index = 0; index < props.data.length; index++) {
        baseprice += parseFloat(props.data[index].price);
    }

    baseprice = (Math.floor((baseprice/100) * 100) / 100);

    let iva = (Math.floor(((21*baseprice)/100) * 100) / 100);
    let totalprice = (Math.floor((baseprice + iva) * 100) / 100);

    return (
        <div className="TotalPrice">
            <div className="product">
                <h2>Resumen</h2>
                <strong>Precio base:</strong> {baseprice} <br></br>
                <strong>Impuestos:</strong> {iva} <br></br>
                <strong>Precio total:</strong> {totalprice} <br></br>
                <div className="totalButton"  onClick={()=> confirm("Esto aun no hace nada ;)")}>Comprar</div>
            </div>
        </div>
    )
}

export default TotalPrice