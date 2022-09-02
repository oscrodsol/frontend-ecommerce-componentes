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

        if (register.password.length > 1) {
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
        <div className="Register justify-content-md-center">
                <h1>Registro</h1>
                <br></br>
                <div className="register">
                <pre>{JSON.stringify(register, null,2)}</pre> 
                    <input  type='nick' name='nick' title='nick' onChange={handleInput}/>
                    <input  type='email' name='email' title='email' onChange={handleInput}/>
                    <input  type='password'  name='password' title='password' onChange={handleInput}/><br></br>
                    <div className="msgError">{msgError}</div>
                    <div className="sendButton" onClick={()=>userRegister()}>Register</div><br></br>
                    </div>
                 {/* <pre>{JSON.stringify(register, null,5)}</pre> */} 
{/*                 <Form onSubmit={userRegister}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="nombre" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="text" name="dni" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" name="telefono" onChange={handleInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form> */}
                {/*ponerme el error bonito!*/}
{/*                 <p>{msgError}</p>
                <p>{msgError ? msgError : userData.successMessage}</p> */}
        </div>
    )
}

export default Register