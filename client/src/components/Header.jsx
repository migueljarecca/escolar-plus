import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useSchool } from '../hooks/useSchool'
import { initialUserForm } from './../store/slices/users/userSlice';

export const Header = () => {

        const { login, user } = useAuth();
        const { schools } = useSchool();

        const [hidden, setHidden] = useState(false); // Estado para controlar la visibilidad del banner
        const [lastScrollPosition, setLastScrollPosition] = useState(0); // Estado para almacenar la última posición de scroll

        const [userState, setUserState] = useState(user?.userLogged || initialUserForm);
        const [isActiveDropdown, setIsActiveOrder] = useState(false);

        useEffect(() => {
            setUserState(user?.userLogged || initialUserForm);
        },[user]);

        const handlerColegios = () => {
            setIsActiveOrder(!isActiveDropdown);
        }

     
        useEffect(() => {

          const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
      
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
              setHidden(true); // Ocultar banner
            } else if (currentScrollPosition < lastScrollPosition && currentScrollPosition < 50) {
              setHidden(false); // Mostrar banner
            }
      
            setLastScrollPosition(currentScrollPosition); // Actualizar posición del scroll
          };
      
          window.addEventListener("scroll", handleScroll);
      
          // Limpieza del evento al desmontar el componente
          return () => window.removeEventListener("scroll", handleScroll);

        }, [lastScrollPosition]); // Dependencia para que el efecto se ejecute al cambiar la posición del scroll
      
      

    return (
        <section className='section-navigation-container'>

            <div className={`div-navigation-container ${hidden ? "top-navigation--hidden" : "top-navigation--visible"}`}>
            
                {login.isAuth
                ? ''
                :
                <article className={`top-navigation ${hidden ? "top-navigation--hidden" : "top-navigation--visible"}`}>
                
                    <div className="top-navigation-content">
                        <NavLink to={"/user/login"}>Inicia sesión</NavLink>
                        <span>|</span>
                        <NavLink to={"/user/register"}>Crea una cuenta</NavLink>
                    </div>

                    <h4 className='top-navigation-h4'>Dirección de la tienda</h4>
                </article>
                }

                <header className="header">

                    <a href="/" className="logo">LOGO</a>

                    <div className={`dropdown-header ${isActiveDropdown ? 'active' : ''}`}>
                        <div className="select" onClick={handlerColegios}>
                            <span className="selected">Colegios</span>
                            <div className={`caret ${isActiveDropdown ? 'active' : ''}`}></div>
                        </div>
                        <ul className={`ul-menu ${isActiveDropdown ? 'active' : ''}`}>
                            {schools.map((item) => (
                                <li key={item.id}>
                                    <NavLink to={`/uniforms/${item.id}`} onClick={handlerColegios}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav-right">
                        <div className="search-box">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <input type="text" placeholder="Buscar"/>
                        </div>
                        <div className='icon-box'>

                        {
                            login.isAuth 
                            ?
                            <NavLink to={'/perfil'}>
                                <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                                <span>Hola! {userState.name}</span>
                            </NavLink> 
                            :
                            <NavLink to={'/user/login'}>
                                <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                                <span>Cuenta</span>
                            </NavLink>
                        }   

                            <NavLink to={'/wishlist'}>
                                <FontAwesomeIcon icon={faHeart}/>
                                <span>Favoritos</span>
                            </NavLink>
                            
                            <NavLink to={'/cart'}>
                                <FontAwesomeIcon icon={faBagShopping}/>
                                <span>Carrito</span>
                            </NavLink>
                            
                        </div>
                    </div>
                </header>

            </div>

        </section>
    )
}