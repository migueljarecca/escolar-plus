import { findAll, remove, save, update } from "../services/userService";
import { useDispatch, useSelector } from 'react-redux';
import { addToUser, initialUserForm, loadingToUsers, removeToUser, updateToUser } from "../store/slices/users/userSlice";

export const useUsers = () => {

    const { users } = useSelector(state => state.users);

    const dispatch = useDispatch();

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
            console.log("Datos recibidos de la API:" +JSON.stringify(item.data, null, 2)); // Verifica aquí qué datos están llegando
    
            dispatch(loadingToUsers(item.data));
            console.log("Datos enviados al estado de Redux");

        } catch (error) {
            console.error("Error al cargar los usuarios:", error);
        }
    }

    const handlerUpdateUser = async (user) => {
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

            handlerAddUser,
            getUsers,
            handlerUpdateUser,
            handlerRemoveUser,
        }
    )
}