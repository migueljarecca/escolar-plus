import { findAll, save } from "../services/userService";

export const useUsers = () => {

    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend-guardar o actualizar usuario
    const handlerAddUser = (user) => {
        console.log("control 1", user);
        save(user);
    }

    const getUsers = async() => {
        try {
            const result = await findAll();
            console.log("control 2", result);
            return result.data;
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
        {
            handlerAddUser,
            getUsers,
        }
    )
}