import { useState } from "react";
import { UserList } from "../UserList"

export const User = () => {

    const [showFormUser, setShowFormUser] = useState(false);

    

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
                <UserList />

                {showFormUser && <h2>formulario</h2>}
                

            </div>


        </main>
    )
}