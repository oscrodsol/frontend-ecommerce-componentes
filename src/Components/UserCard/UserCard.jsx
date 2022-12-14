import React from "react";
import './UserCard.scss'
import axios from "axios"
import { useSelector} from 'react-redux'
import { userSelector} from "../../Containers/User/userSlice"

const UserCard = props => {

    let status = '';

    props.data.status == 1 ? (status = 'Activo'): (status = 'Desactivado');

    const credentials = useSelector(userSelector);

    const config = {
        headers: {"Authorization": `Bearer ${credentials.token}`}
    }

    const deleteUser = () => {
        try {
            axios.delete(`http://127.0.0.1:8000/api/delete_user_by_id/${props.data.id}`, config);
        } catch (error) {
            console.log(error)
        }
    };  

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
                <strong>{props.data.id}</strong>
                <strong>{props.data.nick}</strong>
                <strong>{props.data.name}</strong>
                <strong>{props.data.surname}</strong>
                <strong>{props.data.email}</strong>
                <strong>{props.data.phone}</strong>
                <strong>{props.data.birth_date}</strong>
                <strong>{props.data.created_at}</strong>
                <strong>{props.data.updated_at}</strong>
                <strong>{status}</strong>
            </div>
            <div className="adminButtons">
                <div className="modifyButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Modificar Usuario</div><br></br>
                <div className="modifyButton" onClick={() => confirm("Esto aun no hace nada ;)")}>A??adir / Eliminar roles</div><br></br>
                <div className="modifyButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Ver pedidos</div><br></br>
                <div className="modifyButton" onClick={() => confirm("Esto aun no hace nada ;)")}>Activar / Desactivar cuenta Usuario</div><br></br>
                <div className="deleteUserButton" onClick={() =>{deleteUser()}}><strong>Borrar Usuario</strong></div><br></br>
            </div>
        </div>
    )
}

export default UserCard