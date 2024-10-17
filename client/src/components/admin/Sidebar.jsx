import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    return(
        <section>

            <div className="top-menu">
                <NavLink to={'/'}>LOGO</NavLink>
            </div>    

            <nav className="nav-menu">

                <div>
                    <NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
                </div>
                
                <div>
                    <NavLink to={'/admin/users'}>Usuario</NavLink>
                </div>

                <div>
                    <NavLink to={'/admin/schools'}>Colegio</NavLink>
                </div>
            </nav>

        </section>
    )
}