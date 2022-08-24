import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/toprated">Hola</NavLink>
            </div>
            <div>
                <NavLink className="navlink" to="/login">Al Login</NavLink>
            </div>
        </div>
    )
    
}

export default Header