import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { useUsers } from "../hooks/useUsers"
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useAuth } from "../hooks/useAuth";

const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
}

export const UserUpdatePage = () => {

    // const { users, initialUserForm, getUsers, isLoading } = useUsers();
    const { user } = useAuth();

    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setUserSelect(user);
        } else {
            setUserSelect(initialUserForm);
        }
        
    },[id]);

    console.log("control de usre register page " +JSON.stringify(userSelect, null, 2));

    // useEffect(()=>{
    //     getUsers();
    // },[]);

    // useEffect(()=> {
    //     if (id && users.length > 0) {
    //         const user = users.find(item => item.id == id);
    //         setUserSelect(user);
    //     } else {
    //         setUserSelect(initialUserForm);
    //     }
    // },[id, isLoading]);

    // Inportante! estoy nos ayuda a esperar que esten listos los datos,
    // antes de que users este vacio.
    // if (isLoading) {
    //     return(
    //       <div>Cargando...</div>
    //     )
    //   }

    return(
        <>
            <Header />
            
            <div className="container-form">
                <h3>Editar Usuario</h3>

                <UserForm userSelect={userSelect}></UserForm>
            </div>
     </>
        
    )
}