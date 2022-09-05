import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.scss"
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from "../../Containers/User/userSlice"

const Header = () => {

    const credentials = useSelector(userSelector);

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
                        <NavLink className="navlink" to="/carrito">Carrito</NavLink>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header">
                <div className="menu_header">
                    <NavLink className="navlink" to="/">Inicio</NavLink>
                    <NavLink className="navlink" to="/profile">Tu perfil</NavLink>
                </div>
                <div>
                    <NavLink className="navlink" to="/logout">Bienvenio</NavLink>
                    <NavLink className="navlink" to="/carrito">Carrito</NavLink>
                </div>
            </div>
        )
    }


}

export default Header