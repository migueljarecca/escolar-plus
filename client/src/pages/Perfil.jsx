import { Header } from "../components/Header"

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Perfil = () => {

    return (
        <>
            <Header />

            <section className="section-perfil">
                <nav className="nav-perfil">
                    <div className="div-perfil">
                        <h2>
                            Hola miguel
                        </h2>
                        <div className="div-icon">
                            <span>M</span>
                        </div>
                    </div>
                    
                    <h3>Mi perfil</h3>
                    <h3>Editar perfil</h3>

                    <h4>
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