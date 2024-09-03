import { authService } from "../services/authService"
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout, addUser, removeUser } from "../store/slices/auth/authSlice";
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {

    const { login, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // console.log('control de login' +JSON.stringify(login, null, 2));
    // console.log('control de login user' +JSON.stringify(user, null, 2));

    const navigate = useNavigate();

    const handleLogin = async ({email, password}) => {

        try {
            const response = await authService({email, password});
            const token = response.data.token;

            const claims = JSON.parse(window.atob(token.split(".")[1]));

            const userLogged = {id: response.data.userId, name: response.data.name,
                    lastname: response.data.lastname, 
                    email: response.data.email};                    

            dispatch(onLogin(claims.isAdmin));
            dispatch(addUser({userLogged:userLogged}));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
            }));

            sessionStorage.setItem('user', JSON.stringify({
                userLogged: userLogged,
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
        dispatch(removeUser());
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('login')
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('wishlistData')
        sessionStorage.removeItem('schoolIdOfCart')

        sessionStorage.clear

        navigate('/')
    };

    return {
        login,
        user,

        handleLogin,
        handleLogout,
    }
}