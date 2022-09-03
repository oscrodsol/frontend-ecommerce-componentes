import React from "react"
import "./Profile.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut, userSelector, login } from '../../containers/User/userSlice'
import { useNavigate } from 'react-router-dom'


const Profile = props => {

    const credenciales = useSelector(userSelector)
    const dispatch = useDispatch()
    const navegador = useNavigate()

    console.log(credenciales.user);
    return (
        <div className="profile">
            <p>Hola perfil</p>
            <p>Nombre:{/* credenciales.user.nombre */}</p><br></br>
            <p>DNI:{/* credenciales.user.dni */}</p><br></br>
            <p>E-mail:{/* credenciales.user.email */}</p><br></br>
            <p>Telefono:{/* credenciales.user.telefono */}</p>

          {  <div>
                <div className="sendButton" onClick={() => {
                    navegador("/")
                    localStorage.clear()
                    dispatch(logOut())
                    navegador("/")
                }}>Logout</div><br></br>
            </div>}
        </div>
    )
}

export default Profile