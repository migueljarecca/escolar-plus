import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const AdminHeader = () => {

    const { user, handleLogout } = useAuth();

    const [userPerfil, setUserPerfil] = useState(null); 

    const navigate = useNavigate();

    // console.log(JSON.stringify(login, null, 2));

    useEffect(() => {
        if (user) {
           setUserPerfil(user.userLogged);
        } else {
            navigate('/login');
        }
    },[user]);

    return(
        <>
            <nav>
                <NavLink to={'/perfil'}>
                    <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                    <span>Hola! {user.userLogged.name}</span>
                </NavLink> 

                <h4 onClick={() => handleLogout(userPerfil.id)}>
                        <FontAwesomeIcon icon={faRightFromBracket}/>
                        Cerrar Sesión
                </h4>
            </nav>

        </>
    )
}