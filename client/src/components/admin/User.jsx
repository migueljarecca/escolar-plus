import { useState } from "react";
import { UserList } from "../UserList"
import { UserFormAdmin } from "./UserFormAdmin";
import { useEffect } from 'react';
import { useUsers } from "../../hooks/useUsers";

const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    password: '',
}

export const User = () => {

    const { users, getUsers, handlerRemoveUser, handlerUpdateUser } = useUsers();

    const [showFormUser, setShowFormUser] = useState(false);
    const [userSelectedAd, setUserSelectedAd] = useState(initialUserForm);

    const [idUserAd, setIdUserAd] = useState(null);

    // Definir handlerSelectUser para seleccionar un usuario y mostrar su información en el formulario
    const handlerSelectUser = (user) => {
        setUserSelectedAd(user);
        //setShowFormUser(true); // Mostrar el formulario cuando se seleccione un usuario
    };

    useEffect (()=>{
        getUsers();
    },[]);

    console.log("control de hanldle remove ademin " + JSON.stringify(handlerRemoveUser, null, 2))
    console.log("control de user selected admin  " + JSON.stringify(handlerSelectUser, null, 2))


    return (
        <main className="main-user">
            <div className="div-user">
                <h2>Usuarios</h2>
                <button 
                    onClick={() => setShowFormUser(!showFormUser)}>
                    {showFormUser ? 'Cancelar' : 'Nuevo usuario'}
                </button>
            </div>

            <div className="div-user-list">
                <UserList 
                    users={users} 
                    handlerRemoveUser={handlerRemoveUser}
                    // handlerUpdateUser={handlerUpdateUser}
                    handlerSelectUser={handlerSelectUser}
                />

                {showFormUser &&  <UserFormAdmin userSelectedAd={userSelectedAd}/>}
                

            </div>


        </main>
    )
}