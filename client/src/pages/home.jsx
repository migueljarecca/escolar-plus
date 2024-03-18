import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


export const Home = () => {

    return (
        <header className="header">
            <a href="#" className="logo">LOGO</a>

            <nav className='nav-center'>
                <p>cole</p>
            </nav>

            <div className="nav-right">
                <div className="search-box">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input type="text" placeholder="Buscar"/>
                </div>
                <FontAwesomeIcon icon={faUser}/>
                <FontAwesomeIcon icon={faBagShopping}/>
            </div>
        </header>
    )
}