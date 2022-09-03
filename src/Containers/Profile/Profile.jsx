import React from "react"
import "./Profile.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { logOut, userSelector, login } from '../../containers/User/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const Profile = (props) => {

    let [user, setUser] = useState([])
    const token = useSelector(userSelector);

    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/profile', config)
            .then(resp => {
                console.log(resp.data)
                console.log(user)
                setUser(
                    resp.data
                )
            })
    }, [])
    return (
        <div className="profile">
            <p>Hola {user.nick}</p><br></br>
            <p>Nombre:{user.name}</p>
            <p>Apellidos:{user.surname}</p>
            <p>DNI:{user.id}</p>
            <p>E-mail:{user.email}</p>
            <p>Telefono:{user.phone}</p>

            {<div>
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