import { save } from "../services/userService";

export const useUsers = () => {

    //Recibimos el usuario del UserForm
    //comunicacion con el userService-backend-guardar o actualizar usuario
    const handlerAddUser = (user) => {
    console.log("control", user);
    save(user);
    
  }

  return (
        {
            handlerAddUser
        }
    )
}