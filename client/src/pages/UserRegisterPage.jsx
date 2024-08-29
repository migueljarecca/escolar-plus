import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { useUsers } from "../hooks/useUsers"
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";


export const UserRegisterPage = () => {

    const { users, initialUserForm, getUsers, isLoading } = useUsers();

    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(()=>{
        getUsers();
    },[]);

    useEffect(()=> {
        if (id && users.length > 0) {
            const user = users.find(item => item.id == id);

            setUserSelect(user);
        } else {
            setUserSelect(initialUserForm);
        }
    },[id]);

    // Inportante! estoy nos ayuda a esperar que esten listos los datos,
    // antes de que users este vacio.
    if (!users) {
        return(
          <div>Cargando...</div>
        )
      }

    return(
        <>
            <Header />
            
            <div className="container-form">
                <h3>{userSelect.id > 0 ? 'Editar' : 'Registrar'} Usuario</h3>

                <UserForm userSelect={userSelect}></UserForm>
            </div>
     </>
        
    )
}