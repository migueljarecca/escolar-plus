import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Perfil = () => {

    const { login, user, handleLogout } = useAuth();

    const [userPerfil, setUserPerfil] = useState(user); 

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
           setUserPerfil(user.userLogged);
        } else {
            navigate('/login');
        }
    },[user]);

    console.log("conrol de user " +JSON.stringify(userPerfil, null, 2))

    const getFirstLetter = (name) => {
        if (name && name.length > 0) {
          return name.charAt(0).toUpperCase();
        }
        return '';
      };

    if (!userPerfil) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />

            <section className="section-perfil">
                <nav className="nav-perfil">
                    <div className="div-perfil">
                        <h2>
                            Hola {userPerfil?.name || 'invitado'}
                        </h2>
                        <div className="div-icon">
                            <span>{getFirstLetter(userPerfil.name)}</span>
                        </div>
                    </div>

                    <h3>Mi perfil</h3>

                    <NavLink to={'/user/update/' + userPerfil.id}>
                        <h3>Editar perfil</h3>
                    </NavLink>

                    {login.isAdmin ?
                    
                        <NavLink to='/admin/dashboard'>
                            <h3>Administrador</h3>
                        </NavLink>
                    : null
                    }

                    <h4 onClick={() => handleLogout(userPerfil.id)}>
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
                            <p>{userPerfil.name}</p>

                            <h5>Apellido:</h5>
                            <p>{userPerfil.name}</p>

                            <h5>Correo Electrónico:</h5>
                            <p>{userPerfil.email}</p>
                        </div>
                        
                    </div>
                </main>
            </section>
        </>
    )
}