import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Perfil = () => {

    const { login, handleLogout } = useAuth();
    

    const getFirstLetter = (name) => {
        if (name && name.length > 0) {
          return name.charAt(0).toUpperCase();
        }
        return '';
      };

    return (
        <>
            <Header />

            <section className="section-perfil">
                <nav className="nav-perfil">
                    <div className="div-perfil">
                        <h2>
                            Hola {login.userLogin.name}
                        </h2>
                        <div className="div-icon">
                            <span>{getFirstLetter(login.userLogin.name)}</span>
                        </div>
                    </div>

                    <h3>Mi perfil</h3>

                    <NavLink to={'/user/update/' + login.userLogin.userId}>
                        <h3>Editar perfil</h3>
                    </NavLink>

                    <h4 onClick={handleLogout}>
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
                            <p>{login.userLogin.name}</p>

                            <h5>Apellido:</h5>
                            <p>{login.userLogin.lastname}</p>

                            <h5>Correo Electrónico:</h5>
                            <p>{login.userLogin.email}</p>
                        </div>
                        
                    </div>
                </main>
            </section>
        </>
    )
}