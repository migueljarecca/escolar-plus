import { authService } from "../services/authService"
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from "../store/slices/auth/authSlice";

export const useAuth = () => {

    const { login } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    console.log('control de login' +login);

    const handleLogin = async ({email, password}) => {

        try {
            const response = await authService({email, password});
            const token = response.data.token;

            const claims = JSON.parse(window.atob(token.split(".")[1]));

            const username = {username: response.data.username};

            dispatch(onLogin({username, isAdmin: claims.isAdmin}));

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
    };

    return {
        login,
        
        handleLogin,
        handleLogout,
    }
}