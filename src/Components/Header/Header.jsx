
import React, {useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.scss"
import { useSelector, useDispatch} from 'react-redux'
import { userSelector, userProfile } from "../../Containers/User/userSlice"

const Header = () => {

    const dispatch = useDispatch();
    const credentials = useSelector(userSelector);

    useEffect(() => {
        dispatch(userProfile(credentials.token))

    }, [credentials.token])
    console.log(credentials);
    if (!credentials?.token) {
        return (
            <div className="header">
                
                <div className="home-search">
                    <div>
                        <NavLink className="navlink" to="/">Inicio</NavLink>
                    </div>
                    <div className="searchbar">
                        <NavLink className="navlink" to="/login">Busqueda</NavLink>
                    </div>
                </div>

                <div className="personal">
                    <div>
                        <NavLink className="navlink" to="/login">Login</NavLink>
                    </div>
                    <div>
                        <NavLink className="navlink" to="/shopping_cart">Carrito</NavLink>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header">
                <div className="home-search">
                    <div>
                        <NavLink className="navlink" to="/">Inicio</NavLink>
                    </div>
                    <div className="searchbar">
                        <NavLink className="navlink" to="/login">Busqueda</NavLink>
                    </div>
                </div>
                <div className="personal">
                    <div>
                        <NavLink className="navlink" to="/logout">Bienvenido {credentials.nick}</NavLink>
                    </div>
                    <div>
                        <NavLink className="navlink" to="/shopping_cart">Carrito</NavLink>
                    </div>
                </div>
            </div>
        )
    }


}

export default Header