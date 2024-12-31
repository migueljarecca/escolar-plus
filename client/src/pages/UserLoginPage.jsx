import { useState } from "react";
import { Header } from "../components/Header"
import { NavLink } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { Footer } from "../components/Footer";


const initialLoginForm = {
    email: '',
    password: '',
}

export const UserLoginPage = () => {

    const { handleLogin, errorLoginBackend } = useAuth();
    const [loginForm, setLoginForm] = useState(initialLoginForm);
  
    const { email, password } = loginForm;

    console.log(' errors desde form ' + JSON.stringify(errorLoginBackend, null, 2));

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setLoginForm({
            ...loginForm,
            [ name ] : value
        })
    }

    const onSubmit = async(event) => {
        event.preventDefault();

        try {
            await handleLogin(loginForm);

            setLoginForm(initialLoginForm);
            
        } catch (error) {
            console.log('error de inicio de sesion');
        }

    }

    return(
        <>
            <Header />

            <div className="section-login">
                <div className="container-login">
                    <h3>Inicia Sesión</h3>

                    <form onSubmit={onSubmit}>
                        <label>Correo electrónico</label>
                        <input 
                            type="email"
                            name="email"
                            value={email}
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

            <Footer />
        </>
    )
}