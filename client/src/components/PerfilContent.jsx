import { useAuth } from "../hooks/useAuth"

export const PerfilContent = () => {

    const {user} = useAuth();

    if (!user) {
        return <>Ocurrió un problema</>
    }
    // console.log("cdac " + JSON.stringify(user.userLogged, 2, null))
    return(
        <div className="perfil-details">
            <h3>Mis datos personales</h3>

            <div className="content-text">
                <h5>Nombre:</h5>
                <p>{user.userLogged.name}</p>

                <h5>Apellido:</h5>
                <p>{user.userLogged.lastname}</p>

                <h5>Correo Electrónico:</h5>
                <p>{user.userLogged.email}</p>
            </div>
        </div>
    )
}