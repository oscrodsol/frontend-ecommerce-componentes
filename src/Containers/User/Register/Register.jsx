import React from "react"
import { useEffect, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, userSelector } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Register.css"

const Register = props => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const userData = useSelector(userSelector)
    const [msgError, setMsgError] = useState("");

    const [register, setRegister] = useState({
        nombre: '',
        dni: '',
        password: '',
        email: '',
        telefono: ''
        
    })


    const handleInput = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }

    const userRegister = (event) => {
        event.preventDefault()

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
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

        dispatch(registerUser(register.nombre, register.dni, register.password, register.email, register.telefono))

    }

    return (
        <Row className="Register justify-content-md-center">
            <Col md={6}>
                <h1>Registro</h1>
                <br></br>
                 {/* <pre>{JSON.stringify(register, null,5)}</pre> */} 
                <Form onSubmit={userRegister}>
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
                </Form>
                {/*ponerme el error bonito!*/}
{/*                 <p>{msgError}</p>
                <p>{msgError ? msgError : userData.successMessage}</p> */}
            </Col>
        </Row>
    )
}

export default Register