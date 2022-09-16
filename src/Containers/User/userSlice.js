import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        data: []
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return {
                /* ...state.initialState */
                ...state,
                token: "",
                user: "",
                iat: "",
                exp: ""
            }
        },
        profile: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
            
        }, 
        register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: 'Te has registrado correctamente'
            }
        }
    },
});

export const loginUser = (body) => async (dispatch) => {
    try {
        const user = await axios.post('http://127.0.0.1:8000/api/login', body);
        let decodeToken = jwt(user.data.token);
        console.log(jwt(user.data.token))
        if (user.status === 200) {
            dispatch(login({
                ...decodeToken,
                token: user.data.token
            }))
        }

    } catch (error) {
        console.log(error)
    }
};

export const logOut = () => (dispatch) => {
    dispatch(logout());
};

export const registerUser = (nick, email, password) => async (dispatch) => {
    try {
        const user = await axios.post('http://127.0.0.1:8000/api/register',
            {
                nick: nick,
                email: email,
                password: password
            })

        let response = user
        if (response.status === 200) {
            dispatch(register(response.data))
        }
    } catch (error) {
        console.log(error)
    }
}

export const userProfile = (token) => async (dispatch) => {
    const config = {
        headers: {"Authorization": `Bearer ${token}`}
    }
    try {
        const user =await axios.get("http://localhost:8000/api/profile",config)
        dispatch(profile({
            ...user.data
            
        }))
    } catch (error) {
        dispatch(logError(error));
    }
}

export const { login, logout, register, profile } = userSlice.actions
export const userSelector = (state) => state.user
export default userSlice.reducer;