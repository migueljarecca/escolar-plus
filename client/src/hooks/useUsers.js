import { findAll, remove, save, update } from "../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addToUser, loadingToUsers, removeToUser, setRegisterErrors, updateToUser } from "../store/slices/users/userSlice";
import { useNavigate } from 'react-router-dom';
import { updateUser } from "../store/slices/auth/authSlice";

export const useUsers = () => {

    const { users, initialUserForm, errorRegisterBackend } = useSelector(state => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Traemos todos los usuarios
    const getUsers = async () => {
        try {
            const item = await findAll();
    
            dispatch(loadingToUsers(item.data));

        } catch (error) {
            throw error;
        }
    }

    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend guardar
    const handlerAddUser = async (user) => {
        try {
            const item = await save(user);    
            navigate('/perfil');

        } catch (error) {
            if (error.response?.status == 409) {
                const email = error.response.data || null;
            
                dispatch(setRegisterErrors({email:email}));
                console.log('control de errore ' +email);
            } else {
                throw error;
            }
        }

    }

    const handlerUpdateUser = async (user) => {
        const item = await update(user);
        const userLogged = {
            id: item.data.id, 
            name: item.data.name,
            lastname: item.data.lastname, 
            email: item.data.email
        };

        dispatch(updateUser({userLogged:userLogged}));

        sessionStorage.setItem('user', JSON.stringify({
            userLogged: userLogged,
        }));

        // console.log("id desde useUsers " +item.data.userId);
        // console.log("user desde useUsers " +JSON.stringify(userLogged, null, 2));


        navigate('/perfil');
    }

    const handlerAddUserFromAdmin = async (user) => {
        const item = await save(user);
        dispatch(addToUser(item.data));
    }

    const handlerUpdateUserFromAdmin = async (user) => {
        const item = await update(user);
        dispatch(updateToUser(item.data));
    }

    const handlerRemoveUser = (id) => {
        remove(id);
        dispatch(removeToUser(id));
    }

  return (
        {
            users,
            initialUserForm,
            errorRegisterBackend,

            handlerAddUser,
            getUsers,
            handlerUpdateUser,
            handlerRemoveUser,
            handlerAddUserFromAdmin,
            handlerUpdateUserFromAdmin,
        }
    )
}