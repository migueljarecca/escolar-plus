import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faGauge } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faSchool } from "@fortawesome/free-solid-svg-icons"
import { faShirt } from "@fortawesome/free-solid-svg-icons"

export const Sidebar = () => {

    return(
        <section className="section-sidebar">

            <div className="top-menu">
                <NavLink to={'/'}>LOGO</NavLink>
                <FontAwesomeIcon icon={faXmark} />
            </div>    

            <nav className="nav-menu">

                <div>
                    <div className="menu-div-icon">
                        <FontAwesomeIcon icon={faGauge}/>
                    </div>
                    <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
                </div>
                
                <div>
                    <div className="menu-div-icon">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <NavLink to={'users'}>Usuario</NavLink>
                </div>

                <div>
                    <div className="menu-div-icon">
                        <FontAwesomeIcon icon={faSchool}/>
                    </div>
                    <NavLink to={'schools'}>Colegio</NavLink>
                </div>

                <div>
                    <div className="menu-div-icon">
                        <FontAwesomeIcon icon={faShirt}/>
                    </div>
                    <NavLink to={'uniforms'}>Uniforme</NavLink>

                </div>
            </nav>

        </section>
    )
}