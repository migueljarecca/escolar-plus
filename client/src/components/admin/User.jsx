import { UserList } from "../UserList"

export const User = () => {

    return (
        <main className="main-user">
            <div className="div-user">
                <h2>Usuarios</h2>
                <button>
                    crear usuario
                </button>
            </div>

            <div className="div-user-list">
                <UserList />

                <h2>formulario</h2>

            </div>


        </main>
    )
}