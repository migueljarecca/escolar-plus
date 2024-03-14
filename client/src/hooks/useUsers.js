import { useEffect, useState } from "react";
import { findAll, save } from "../services/userService";

export const useUsers = () => {


    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend-guardar o actualizar usuario
    const handlerAddUser = (user) => {
        console.log("control 1", user);
        save(user);
    }

    //Traemos todos los usuarios
    const getUsers = () => {
        const [data, setData] = useState(null);

        useEffect( () => {
            const fetchData = async () => {
                try {
                    const result = await findAll();
                    setData(result.data);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchData();
        },[]);
        
        return data;
    }

  return (
        {
            handlerAddUser,
            getUsers,
            
        }
    )
}