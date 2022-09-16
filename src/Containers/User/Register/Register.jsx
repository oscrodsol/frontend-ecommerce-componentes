import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, userSelector } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Register.scss"

const Register = props => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const userData = useSelector(userSelector)
    const [msgError, setMsgError] = useState("");

    const [register, setRegister] = useState({
        nick: '',
        email: '',
        password: ''
    })


    const handleInput = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }

    const userRegister = (event) => {

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(register.email)) {
            setRegister({
                ...register,
                isError: true,
                message: 'Introduce un e-mail válido'
            });
            return;
        }

        if (register.password.length > 3) {
            if (! /[\d()+-]/g.test(register.password)) {
                setRegister({
                    ...register,
                    isError: true,
                    message: 'Introduce un password válido'
                });
                return;
            };

        } else {
            setRegister({
                ...register,
                isError: true,
                message: 'El password debe de tener como mínimo 4 caracteres'
            });
            return;
        }

        setRegister({
            ...register,
            isError: false,
            errorMsg: ''
        });

        dispatch(registerUser(register.nick, register.email, register.password))

    }

    return (
        <div className="Register">
                <h1>Crear cuenta</h1>
                <br></br>
                <div className="registerForm">
                {/* <pre>{JSON.stringify(register, null,2)}</pre>  */}
                    <h3>Escoge tu Nick</h3>
                    <input className="nick" type='nick' name='nick' title='nick' onChange={handleInput}/>
                    <h3>Escribe tu email</h3>
                    <input className="email" type='email' name='email' title='email' onChange={handleInput}/>
                    <h3>Introduce tu contraseña</h3>
                    <input className="password" type='password'  name='password' title='password' onChange={handleInput}/><br></br>
                    <div className="msgError">{msgError}</div>
                    <div className="sendButton" onClick={()=>userRegister()}>Registrarse</div><br></br>
                    </div>
                {/*ponerme el error bonito!*/}
{/*                 <p>{msgError}</p>
                <p>{msgError ? msgError : userData.successMessage}</p> */}
        </div>
    )
}

export default Register