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

import logo from '/src/images/logo.jpeg'
import { useWishlist } from '../hooks/useWishlist'
import { useCart } from '../hooks/useCart'

export const Header = () => {

        const { login, user } = useAuth();
        const { schools } = useSchool();

        const { wishlist } = useWishlist();
        const { cart } = useCart();

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
            
               
                <article className={`top-navigation ${hidden ? "top-navigation--hidden" : "top-navigation--visible"}`}>
                
                    <div className="top-navigation-content">
                    {login.isAuth
                    ? <h3 className='top-navigation-h3'>Hola! {userState.name || ''}</h3>
                    :
                        <>
                            <NavLink to={"/user/login"}>Inicia sesión</NavLink>
                            <span>|</span>
                            <NavLink to={"/user/register"}>Crea una cuenta</NavLink>
                        </>
                    }
                    </div>
                    <h4 className='top-navigation-h4'>Dirección de la tienda</h4>
                </article>
                

                <header className="header">

                    <div className='header-left-div'>
                        <div className="logo-div">
                            <NavLink to={'/'}>
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>

                        {schools && schools.length > 0 ? 

                            <div className={"dropdown-header"}>
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
                        : ''
                        }     

                    </div>
                    <div className="nav-right">

                        {/* <div className="search-box">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <input type="text" placeholder="Buscar"/>
                        </div> */}

                        <div className='icon-box'>

                        {
                            login.isAuth 
                            ?
                            <NavLink to={'/perfil'}>
                                <FontAwesomeIcon icon={faUser}> <title>Perfil</title></FontAwesomeIcon>
                                {/* <span>Hola! {userState.name}</span> */}
                            </NavLink> 
                            :
                            <NavLink to={'/user/login'}>
                                <FontAwesomeIcon icon={faUser} title='Inicia sesión'> </FontAwesomeIcon>
                                {/* <span>Cuenta</span> */}
                            </NavLink>
                        }   

                            <NavLink to={'/wishlist'}>
                                <FontAwesomeIcon icon={faHeart} title='Favoritos'/>
                                {wishlist.length > 0 && (
                                    <div className="count-div">
                                        <span>{wishlist.length}</span>
                                    </div>
                                )}
                                
                            </NavLink>
                            
                            <NavLink to={'/cart'}>
                                <FontAwesomeIcon icon={faBagShopping} title='Carrito'/>
                                {cart.length > 0 && (
                                    <div className="count-div">
                                        <span>{cart.length}</span>
                                    </div>
                                )}
                            </NavLink>
                            
                        </div>
                    </div>
                </header>

            </div>

        </section>
    )
}