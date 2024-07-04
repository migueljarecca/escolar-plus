import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../hooks/useAuth";

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
                    <h3>Editar perfil</h3>

                    <h4 onClick={handleLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                        Cerrar Sesión
                    </h4>
                </nav>

                <main className="main-perfil">
                    <h2>Perfil</h2>

                    <div>
                        <h3>Mis datos personales</h3>
                        
                    </div>
                </main>
            </section>
        </>
    )
}