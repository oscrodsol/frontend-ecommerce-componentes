import React from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../containers/ShoppingCart/shoppingCartSlice'
import './TotalPrice.scss'

const TotalPrice = props => {
    const dispatch = useDispatch()

    console.log(props);

    let totalprice = 0;

/*     for (let index = 0; index <= props.data.length; index++) {
        totalprice += parseFloat(props.data[index].price);
        console.log(totalprice);
        console.log(props.data[index].price);
    } */

    return (
        <div className="TotalPrice">
            <div className="product">
                <br></br><img className="image" src={props.data.image}></img><br></br>
                <strong>Precio:</strong> {totalprice} <br></br>
                {props.btn != '0' &&
                    <button className="addBtn" onClick={() => { dispatch(addToCart(props.data)) }}>Continuar</button>
                }
            </div>
        </div>
    )
}

export default TotalPrice