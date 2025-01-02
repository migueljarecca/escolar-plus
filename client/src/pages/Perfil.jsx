import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../hooks/useAuth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

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
    // console.log("conrol de user 01 " +JSON.stringify(user, null, 2))

    // console.log("conrol de userrr " +JSON.stringify(userPerfil.userLogged, null, 2))

    // console.log("conrol de user " +JSON.stringify(userPerfil, null, 2))

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

                    <NavLink to={''}>
                        <h3>Mi perfil</h3>
                    </NavLink>

                    <NavLink to={'update'}>
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

                <div className="div-intersection">
                    
                </div>

                <main className="main-perfil">
                    {/* <div className="main-perfil-content"> */}

                        <Outlet />
                        
                    {/* </div> */}
                </main>
            </section>

            <Footer />
        </>
    )
}