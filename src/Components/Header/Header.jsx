import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import {useSelector, useDispatch} from 'react-redux'
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { peliculasFiltradas } from "../../Containers/Home/homeSlice"


const Header = props => {

    const credenciales = useSelector(selectDatosUsuario);
    const dispatch = useDispatch();
    const navegador = useNavigate();

    const cambioPagina = (event) => {
        if(event.key === "Enter") {
            dispatch(peliculasFiltradas(event.target.value))
            navegador("/movies");
        }  
    }

    if(!credenciales?.token){

    return (
        <div className="header">
            <img className="logo" src={img} />
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/toprated">Top Rated</NavLink>
                <input className="listInput" onKeyPress={cambioPagina} placeholder="Titulo..." type="text" name="titulo" />
            </div>
            <div>
                <NavLink className="ilogin" to="/login"><img src={img2}/></NavLink>
            </div>
        </div>
    )
    }else if(credenciales.user.admin === true){
        return (
            <div className="header">
                <img className="logo" src={img} />
                <div className="menu_header">
                    <NavLink className="navlink" to="/">Inicio</NavLink>
                    <NavLink className="navlink" to="/toprated">Top Rated</NavLink>
                    <NavLink className="navlink" to="/admin">Admin</NavLink>
                    <input className="listInput" onKeyPress={cambioPagina} placeholder="Titulo..." type="text" name="titulo"/>
                </div>
                <div className="vistaadmin">
                    <NavLink className="navlinkp" to="/Profile">Bienvenido, {credenciales.user.nombre} </NavLink>
                    <span className="adminp">ADMIN</span>
                </div>
            </div>
        )
    }else{
        return (
            <div className="header">
                <img className="logo" src={img} />
                <div className="menu_header">
                    <NavLink className="navlink" to="/">Inicio</NavLink>
                    <NavLink className="navlink" to="/toprated">Top Rated</NavLink>
                    <input className="listInput" onKeyPress={cambioPagina} placeholder="Titulo..." type="text" name="titulo" />
                </div>
                <div>
                    <NavLink className="navlink" to="/Profile">Bienvenido,{credenciales.user.nombre} </NavLink>
                </div>
            </div>
        )
    }
}

export default Header