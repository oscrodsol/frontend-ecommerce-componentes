import React from "react"
import "./Admin.scss"
import axios from "axios"
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from "../../Containers/User/userSlice"
import UserCard from '../../Components/UserCard/UserCard'

const Admin = (props) => {

    const credentials = useSelector(userSelector);

    const config = {
        headers: { "Authorization": `Bearer ${credentials.token}` }
    }

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_all_users', config)
            .then(resp => {
                setUsers(
                    resp.data
                )
            })
    }, [])

    

    console.log(users);
    /* console.log(components) */
    return (
        <div className="admin">
            <h1>Panel Administrador de Usuarios</h1>
            <div className="users">
                {
                    users.data?.map((users, index) => (
                        <UserCard key={index} data={users} />
                    ))
                }
            </div>
        </div>
    )
}

export default Admin