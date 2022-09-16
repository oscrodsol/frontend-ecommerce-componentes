import React, {useEffect, useState} from 'react';
import './Login.scss';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userSelector, loginUser} from '../userSlice';

const Login = props => {
    //hooks
    const [datosLogin, setDatosLogin] = useState ({
        email:'', 
        password:''
    })  
    const [msgError, setMsgError] = useState("");

    //Variables
    let navegador = useNavigate();
    //Dispatch va a ser un metodo necesario de redux que vamos a usar
    const dispatch = useDispatch();
    const credenciales = useSelector(userSelector)

    //Handlers
    const modificaDatosLogin = (e) => {
        setDatosLogin({
            ...datosLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect (()=>{
        //Comprobamos si tenemos token
        if(credenciales?.token !== ''){
            navegador("/");
        }
    },[]);

    const logIn = () => {
        //Primero compruebo que los campos sean correctos
            //Esta expresión regular ayuda a validar un email
         if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(datosLogin.email) ) {
            setMsgError('Introduce un email válido');
            return;
        } 
            //Esta expresión regular ayuda a validar un password (numero + letras en este caso)
        if(datosLogin.password.length > 2){
            
            if (! /[\d()+-]/g.test(datosLogin.password) ) {
                setMsgError('Introduce un password válido');
                return;
            };
        }else{
            setMsgError('El password debe de tener como mínimo 4 caracteres');
            return;
        }
        //Por si acaso teníamos algo referenciado como error, lo limpiamos
        /* setMsgError(""); */
        //Dispatch es el método de redux que ejecuta el reducer
        dispatch(loginUser({email: datosLogin.email,
            password: datosLogin.password}
        ));

        setTimeout(()=>{
            navegador("/");
        },1000)
    };

    return(
            <div className="login">
                    <h1>Iniciar Sesion</h1>
                     {/* <pre>{JSON.stringify(datosLogin, null,2)}</pre> */} 
                    <input className="email" type='email' name='email' title='email' onChange={modificaDatosLogin}/>
                    <input className="password" type='password'  name='password' title='password' onChange={modificaDatosLogin}/><br></br>
                    <div className="msgError">{msgError}</div>
                    <div className="sendButton" onClick={()=>logIn()}>Login</div><br></br>
                    <h3>¿Aun no estas registrado?</h3>
                    <div className="registerButton" to="/register" onClick={()=> navegador("/register")}>Registrate colega</div>
            </div>
    )
}

export default Login