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
                <NavLink to={'/admin/dashboard'}>
                    <div>
                        <div className="menu-div-icon">
                            <FontAwesomeIcon icon={faGauge}/>
                        </div>
                        <span>Dashboard</span>
                    </div>
                </NavLink>
                
                <NavLink to={'users'}>
                    <div>
                        <div className="menu-div-icon">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <span>Usuario</span>
                    </div>
                </NavLink>
                
                <NavLink to={'schools'}>
                    <div>
                        <div className="menu-div-icon">
                            <FontAwesomeIcon icon={faSchool}/>
                        </div>
                        <span>Colegio</span>
                    </div>
                </NavLink>
                
                <NavLink to={'uniforms'}>
                    <div>
                        <div className="menu-div-icon">
                            <FontAwesomeIcon icon={faShirt}/>
                        </div>
                        <span>Uniforme</span>
                    </div>
                </NavLink>

            </nav>

        </section>
    )
}