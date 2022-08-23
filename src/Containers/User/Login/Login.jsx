import React, {useEffect} from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario, loginUsuario } from '../userSlice';
import { useState } from 'react';

const Login = (props) => {
    //hooks
    const [datosLogin, setDatosLogin] = useState ({
        dni:'', 
        password:''
    })  
    const [msgError, setMsgError] = useState("");

    //Variables
    let navegador = useNavigate();
    //Dispatch va a ser un metodo necesario de redux que vamos a usar
    const dispatch = useDispatch();
    const credenciales = useSelector(selectDatosUsuario)

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
            navegador("/Profile");
        }
    },[]);

    const logeame = () => {
        //Primero compruebo que los campos sean correctos
            //Esta expresión regular ayuda a validar un email
        if (! /[0-9]{7,8}[A-Z]/g.test(datosLogin.dni) ) {
            setMsgError('Introduce un dni válido');
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
        setMsgError("");
        //Dispatch es el método de redux que ejecuta el reducer
        dispatch(loginUsuario({dni: datosLogin.dni,
            password: datosLogin.password}
        ));

        setTimeout(()=>{
            navegador("/");
        },1000)
    };

    return(
            <div className="login">
                <div className='loginDesign'>
                    <h1>Login</h1>
                    {/* <pre>{JSON.stringify(datosLogin, null,2)}</pre> */}
                    <input  type='email' name='dni' title='dni' onChange={modificaDatosLogin} lenght='30'/>
                    <input  type='password'  name='password' title='password' onChange={modificaDatosLogin} lenght='30'/><br></br>
                    <div className="msgError">{msgError}</div>
                    <div className="sendButton" onClick={()=>logeame()}>Login</div><br></br>
                    <div className="botonregister" to="/register">Si no estas registrado, registrate aqui.<img className="iregister "src={img3} onClick={()=> navegador("/register")}/></div>
                    
                </div>
            </div>
    )
}

export default Login