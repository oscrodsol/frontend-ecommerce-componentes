import React from "react"
import "./Profile.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { logOut, userSelector, login, modifyUser } from '../../containers/User/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Profile = (props) => {

    const navegador = useNavigate()
    const dispatch = useDispatch();
    const credentials = useSelector(userSelector);

    const [modify, setModify] = useState({
        nick: '',
        name: '',
        surname: '',
        password: '',
        phone: ''
    })

    const handleInput = (event) => {
        setModify({
            ...modify,
            [event.target.name]: event.target.value
        })
    }

    const delLog = () => async (dispatch) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/logout', config);
            if (response.status === 200) {
                dispatch(logout());
            }
        } catch (error) {
            console.log(error)
        }
    };

    const config = {
        headers: {
            "Authorization": `Bearer ${credentials.token}`
        }
    }
        
        const userModify = (event) => {

            if (modify.password.length > 3) {
                if (! /[\d()+-]/g.test(modify.password)) {
                    setModify({
                        ...modify,
                        isError: true,
                        message: 'Introduce un password válido'
                    });
                    return;
                };
    
            } else {
                setModify({
                    ...modify,
                    isError: true,
                    message: 'El password debe de tener como mínimo 4 caracteres'
                });
                return;
            }
    
            setModify({
                ...modify,
                isError: false,
                errorMsg: ''
            });

            if (modify.nick == '') {
                modify.nick = credentials.user.nick;
            }
            if (modify.name == '') {
                modify.name = credentials.user.name;
            }
            if (modify.surname == '') {
                modify.surname = credentials.user.surname;
            }
            if (modify.password == '') {
                modify.password = credentials.user.password;
            }
            if (modify.phone == '') {
                modify.phone = credentials.user.phone;
            }
    
            dispatch(modifyUser(credentials.token, modify.nick, modify.name, modify.surname, modify.password, modify.phone))

    }

    if (credentials.roles[0].role_id == 2 || credentials.roles[0].role_id == 3) {
        return (
            <div className="profile">
                <h1>Mis datos</h1>
                <img className="profileImage" src={credentials.user.image}></img>
                <div className="sendButton" onClick={() => navegador("/admin")}>ADMINISTRADOR</div><br></br>
                <div className="cuenta">
                    Nick:<br></br>
                    <input className="input" type='nick' name='nick' title='nick' placeholder={credentials.user.nick} onChange={handleInput} /><br></br>
                    Nombre:<br></br>
                    <input className="input" type='name' name='name' title='name' placeholder={credentials.user.name} onChange={handleInput} /><br></br>
                    Apellidos:<br></br>
                    <input className="input" type='surname' name='surname' title='surname' placeholder={credentials.user.surname} onChange={handleInput} /><br></br>
                    E-mail: Por razones de seguridad este campo es inmutable ;)<br></br>
                    <input className="input" type='email' name='email' title='email' value={credentials.user.email} /><br></br>
                    Reestablecer contraseña:<br></br>
                    <input className="input" type='password' name='password' title='password' placeholder='Introduce aqui tu nueva contraseña' onChange={handleInput} /><br></br>
                    Telefono:<br></br>
                    <input className="input" type='phone' name='phone' title='phone' placeholder={credentials.user.phone} onChange={handleInput} /><br></br>
                    <div className="sendButton" onClick={() => {userModify()}}>Guardar cambios</div><br></br>
                </div>
                <h2>Mis direcciones</h2>
                <div className="direcciones">
                    <p>Aun no tienes direcciones</p><br></br>
                    <div className="sendButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Añadir direccion</div><br></br>
                </div>
                <h2>Datos de facturacion</h2>
                <div className="facturacion">
                    <p>Aun no tienes direcciones</p><br></br>
                    <div className="sendButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Añadir direccion</div><br></br>
                </div>
                <h2>Mis pedidos</h2>
                <div className="pedidos">
                    <p>No hay pedidos en curso</p><br></br>
                </div>
    
                {<div>
                    <div className="sendButton" id='logout' onClick={() => {
                        delLog()
                        dispatch(logOut())
                        localStorage.clear()
                        navegador("/")
                    }}>Logout</div><br></br>
                </div>}
            </div>
        )
    } else {
        return (
            <div className="profile">
                <h1>Mis datos</h1>
                <img className="profileImage" src={credentials.user.image}></img>
                <div className="cuenta">
                    Nick:<br></br>
                    <input className="input" type='nick' name='nick' title='nick' placeholder={credentials.user.nick} onChange={handleInput} /><br></br>
                    Nombre:<br></br>
                    <input className="input" type='name' name='name' title='name' placeholder={credentials.user.name} onChange={handleInput} /><br></br>
                    Apellidos:<br></br>
                    <input className="input" type='surname' name='surname' title='surname' placeholder={credentials.user.surname} onChange={handleInput} /><br></br>
                    E-mail: Por razones de seguridad este campo es inmutable ;)<br></br>
                    <input className="input" type='email' name='email' title='email' value={credentials.user.email} /><br></br>
                    Reestablecer contraseña:<br></br>
                    <input className="input" type='password' name='password' title='password' placeholder='Introduce aqui tu nueva contraseña' onChange={handleInput} /><br></br>
                    Telefono:<br></br>
                    <input className="input" type='phone' name='phone' title='phone' placeholder={credentials.user.phone} onChange={handleInput} /><br></br>
                    <div className="sendButton" onClick={() => {userModify()}}>Guardar cambios</div><br></br>
                </div>
                <h2>Mis direcciones</h2>
                <div className="direcciones">
                    <p>Aun no tienes direcciones</p><br></br>
                    <div className="sendButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Añadir direccion</div><br></br>
                </div>
                <h2>Datos de facturacion</h2>
                <div className="facturacion">
                    <p>Aun no tienes direcciones</p><br></br>
                    <div className="sendButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Añadir direccion</div><br></br>
                </div>
                <h2>Mis pedidos</h2>
                <div className="pedidos">
                    <p>No hay pedidos en curso</p><br></br>
                </div>
    
                {<div>
                    <div className="sendButton" id='logout' onClick={() => {
                        delLog()
                        dispatch(logOut())
                        localStorage.clear()
                        navegador("/")
                    }}>Logout</div><br></br>
                </div>}
            </div>
        )
    }
    
}

export default Profile