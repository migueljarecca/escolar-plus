import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const Header = () => {

        const [isSticky, setIsSticky] = useState(false);
      
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
                <div className="header-article-content">
                    <NavLink to={"/"}>Inicia sesión</NavLink>
                    <span>|</span>
                    <NavLink to={"/"}>Crea una cuenta</NavLink>
                </div>

                <h4 className='header-article-h4'>Dirección de la tienda</h4>
            </article>
    
            <header className={`header ${isSticky ? 'sticky' : ''}`}>

                <a href="#" className="logo">LOGO</a>

                <nav className='nav-center'>
                    <p>cole</p>
                </nav>

                <div className="nav-right">
                    <div className="search-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input type="text" placeholder="Buscar"/>
                    </div>
                    <div className='icon-box'>
                        <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                        <span>Cuenta</span>
                        <FontAwesomeIcon icon={faHeart}/>
                        <span>Favoritos</span>

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