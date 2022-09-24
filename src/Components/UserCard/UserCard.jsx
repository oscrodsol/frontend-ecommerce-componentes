import React from "react";
import './UserCard.scss'

const UserCard = props => {

    let status = '';

    props.data.status == 1 ? (status = 'Activo'): (status = 'Desactivado')

    return (
        <div className="UserCard">
            <img className="userImage" src={props.data.image}></img>
            <div className="userTitles">
                <strong>ID:</strong>
                <strong>Nick:</strong>
                <strong>Nombre:</strong>
                <strong>Apellidos:</strong>
                <strong>e-mail:</strong>
                <strong>Telefono:</strong>
                <strong>Fecha de nacimiento:</strong>
                <strong>Usuario registrado:</strong>
                <strong>Ultima modificacion del usuario:</strong>
                <strong>Estado de la cuenta:</strong>
            </div>
            <div className="userData">
                <strong>{props.data.id}</strong><br></br>
                <strong>{props.data.nick}</strong><br></br>
                <strong>{props.data.name}</strong><br></br>
                <strong>{props.data.surname}</strong><br></br>
                <strong>{props.data.email}</strong><br></br>
                <strong>{props.data.phone}</strong><br></br>
                <strong>{props.data.birth_date}</strong><br></br>
                <strong>{props.data.created_at}</strong><br></br>
                <strong>{props.data.updated_at}</strong><br></br>
                <strong>{status}</strong><br></br>
            </div>
        </div>
    )
}

export default UserCard