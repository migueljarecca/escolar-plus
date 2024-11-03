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
        const [isSticky, setIsSticky] = useState(false);

        const [userState, setUserState] = useState(user?.userLogged || initialUserForm);
        const [isActiveDropdown, setIsActiveOrder] = useState(false);

        useEffect(() => {
            setUserState(user?.userLogged || initialUserForm);
        },[user]);

        const handlerColegios = () => {
            setIsActiveOrder(!isActiveDropdown);
        }

        const handleScroll = () => {
          const shouldBeSticky = window.scrollY > 50;
          setIsSticky(shouldBeSticky);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
      
          // Limpiar el evento cuando el componente se desmonte
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    return (
        <>
            <article className="header-article">

                {login.isAuth 
                ? ''
                : 
                <div className="header-article-content">
                    <NavLink to={"/user/login"}>Inicia sesión</NavLink>
                    <span>|</span>
                    <NavLink to={"/user/register"}>Crea una cuenta</NavLink>
                </div>
                }
                

                <h4 className='header-article-h4'>Dirección de la tienda</h4>
            </article>
    
            <header className={`header ${isSticky ? 'sticky' : ''}`}>

                <a href="/" className="logo">LOGO</a>

                <div className={`dropdown-header ${isActiveDropdown ? 'active' : ''}`}>
                    <div className="select" onClick={handlerColegios}>
                        <span className="selected">Colegios</span>
                        <div className={`caret ${isActiveDropdown ? 'active' : ''}`}></div>
                    </div>
                    <ul className={`ul-menu ${isActiveDropdown ? 'active' : ''}`}>
                        {schools.map((item) => (
                            <li key={item.id}>
                                <NavLink to={`/uniforms/${item.id}`}>
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
        </>
    )
}