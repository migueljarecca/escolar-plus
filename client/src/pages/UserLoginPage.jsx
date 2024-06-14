import { useState } from "react";
import { Header } from "../components/Header"
import { NavLink } from 'react-router-dom';


const initialLoginForm = {
    username: '',
    password: '',
}

export const UserLoginPage = () => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
  
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setLoginForm({
            ...loginForm,
            [ name ] : value
        })
    }

    const onSubmit = async(event) => {
        event.preventDefault();

    }

    return(
        <>
            <Header />

            <div className="section-login">
                <div className="container-login">
                    <h3>Inicia Sesión</h3>

                    <form onSubmit={onSubmit}>
                        <label>Nombre:</label>
                        <input 
                            type="text"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            />

                        <label>Contraseña:</label>
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            />  

                        <button
                            type="submit"
                            >
                            Iniciar
                        </button>      
                    </form>
                </div>
                <div className="container-register">
                    <h3>Bienvenido!</h3>
                    <p>Si aún no tienes una cuenta registrada lo puedes hacer aqui!</p>

                    <NavLink to="/user/register"> Registrate</NavLink>

                </div>
            </div>
        </>
    )
}