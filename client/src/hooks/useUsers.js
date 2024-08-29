import { findAll, remove, save, update } from "../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addToUser, initialUserForm, loadingToUsers, removeToUser, updateToUser } from "../store/slices/users/userSlice";
import { useNavigate } from 'react-router-dom';

export const useUsers = () => {

    const { users } = useSelector(state => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend guardar
    const handlerAddUser = async (user) => {
        console.log("control 1", user);
        const item = await save(user);
        dispatch(addToUser(item.data));
    }

    //Traemos todos los usuarios
    const getUsers = async () => {
        try {
            const item = await findAll();
    
            dispatch(loadingToUsers(item.data));

        } catch (error) {
            console.error("Error al cargar los usuarios:", error);
        }
    }

    const handlerUpdateUser = async (user) => {
        const item = await update(user);
        dispatch(updateToUser(item.data));

        navigate('/perfil');
    }

    const handlerRemoveUser = (id) => {
        remove(id);
        dispatch(removeToUser(id));
    }

  return (
        {
            users,
            initialUserForm,

            handlerAddUser,
            getUsers,
            handlerUpdateUser,
            handlerRemoveUser,
        }
    )
}