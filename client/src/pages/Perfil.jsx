import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Perfil = () => {

    const { login, user, handleLogout } = useAuth();

    const getFirstLetter = (name) => {
        if (name && name.length > 0) {
          return name.charAt(0).toUpperCase();
        }
        return '';
      };

    // console.log(JSON.stringify(login.userLogin, null, 2))
      
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />

            <section className="section-perfil">
                <nav className="nav-perfil">
                    <div className="div-perfil">
                        <h2>
                            Hola {user.name}
                        </h2>
                        <div className="div-icon">
                            <span>{getFirstLetter(user.name)}</span>
                        </div>
                    </div>

                    <h3>Mi perfil</h3>

                    <NavLink to={'/user/update/' + user.id}>
                        <h3>Editar perfil</h3>
                    </NavLink>

                    <h4 onClick={() => handleLogout(user.id)}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                        Cerrar Sesión
                    </h4>
                </nav>

                <main className="main-perfil">
                    <h2>Perfil</h2>

                    <div className="main-perfil-content">
                        <h3>Mis datos personales</h3>

                        <div className="content-text">
                            <h5>Nombre:</h5>
                            <p>{user.name}</p>

                            <h5>Apellido:</h5>
                            <p>{user.name}</p>

                            <h5>Correo Electrónico:</h5>
                            <p>{user.email}</p>
                        </div>
                        
                    </div>
                </main>
            </section>
        </>
    )
}