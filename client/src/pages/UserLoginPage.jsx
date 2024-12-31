import { useState } from "react";
import { Header } from "../components/Header"
import { NavLink } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { Footer } from "../components/Footer";
import { useDispatch } from "react-redux";
import { setAuthErrors } from "../store/slices/auth/authSlice";


const initialLoginForm = {
    email: '',
    password: '',
}

const initialFormErrors = {
    email: '',
    password: '',
};

export const UserLoginPage = () => {

    const { handleLogin, login, errorLoginBackend } = useAuth();
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    
    const [formErrors, setFormErrors] = useState(initialFormErrors);
  
    const { email, password } = loginForm;
    const dispatch = useDispatch();

    // console.log(' errors desde form ' + JSON.stringify(errorLoginBackend, null, 2));

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setLoginForm({
            ...loginForm,
            [ name ] : value
        });
        setFormErrors({
            ...formErrors,
            [name]: '', // Limpia el error del campo mientras se escribe
        });

        // console.log(`Error en el campo ${name}:`, errorLoginBackend[name]);
             
         // Limpia errores específicos del backend
        if (errorLoginBackend[name]) {
            
            dispatch(
                setAuthErrors({
                    ...errorLoginBackend,
                    [name]: '', // Limpia solo el error del campo modificado
                })
            );
        }
    }

    const validateForm = () => {
        const errors = {};

        if (!email.trim()) {
            errors.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "El correo electrónico no es válido.";
        }

        if (!password.trim()) {
            errors.password = "La contraseña es obligatoria.";
        // } else if (password.length < 5) {
        //     errors.password = "La contraseña debe tener al menos 5 caracteres.";
        }
        return errors;
    };

    const onSubmit = async(event) => {
        event.preventDefault();

        const errors = validateForm();

        //se usa object porque es un objeto y no un array
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            await handleLogin(loginForm);
 
        } catch (error) {
            console.log('error de inicio de sesion');
        }

        if (login.isAuth == true) {
            setLoginForm(initialLoginForm);            
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
                            {formErrors.email && <span>{formErrors.email}</span>}
                            {errorLoginBackend.email && <span>{errorLoginBackend.email}</span>}
   

                        <label>Contraseña:</label>
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            />  
                            {formErrors.password && <span>{formErrors.password}</span>}
                            {errorLoginBackend.password && <span>{errorLoginBackend.password}</span>}


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