import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'usuario',
    initialState:{
        token: ""
    },
    reducers:{
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return{
                ...state,
                token: "",
                user: "",
                iat: "",
                exp: ""
            }
        },register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: 'Te has registrado correctamente'
            }
        }
    },
});

export const loginUsuario = (body) => async (dispatch) => {
    try{
        const user = await axios.post('https://videoclub-backend.herokuapp.com/usuarios/login',body);
        let decodificarToken = jwt(user.data.token);
        console.log(jwt)
        if(user.status === 200){
            dispatch(login({
                ...decodificarToken,
                token: user.data.token
            }))
        }

    }catch (error){
        console.log(error)
    }
};
export const logOut = () => (dispatch) => {
    dispatch(logout());
};
export const registerUser = (nombre, dni , password, email, telefono) => async (dispatch) => {
    try {
        const user = await axios.post('https://videoclub-backend.herokuapp.com/usuarios/register',
        {
            nombre: nombre,
            password: password,
            telefono: telefono,
            email: email,
            dni: dni
        })

        let response = user
        if(response.status === 200){
            dispatch(register(response.data))
        } 
    } catch (error) {
        dispatch(logError(error))
    }
}

export const {login, logout} = userSlice.actions

export const selectDatosUsuario = (state) => state.usuario
export const userSelector = (state) =>state.user

export default userSlice.reducer;