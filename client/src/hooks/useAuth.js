import { authService } from "../services/authService"
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from "../store/slices/auth/authSlice";
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {

    const { login } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    console.log('control de login' +JSON.stringify(login, null, 2));
    const navigate = useNavigate();

    const handleLogin = async ({email, password}) => {

        try {
            const response = await authService({email, password});
            const token = response.data.token;

            const claims = JSON.parse(window.atob(token.split(".")[1]));

            const userLogin = {email: response.data.email, 
                    userId: response.data.userId, name: response.data.name, 
                    lastname: response.data.lastname};

            dispatch(onLogin({userLogin, isAdmin: claims.isAdmin}));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                userLogin: userLogin,
            }));
    
            sessionStorage.setItem('token', `Bearer ${token}`)
            navigate('/perfil');

        } catch (error) {
            if (error.response?.status == 401) {
                console.log('email o contraseña invalidos')
            } else {
                throw error;
            }
        }
    };

    const handleLogout = () => {
        dispatch(onLogout());
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('login')
        sessionStorage.clear
        navigate('/')
    };

    return {
        login,
        
        handleLogin,
        handleLogout,
    }
}