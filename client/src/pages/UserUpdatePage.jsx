import { useEffect, useState } from "react";
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

    const { user } = useAuth();

    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(() => {
        if (user.userLogged.id) {
            setUserSelect(user.userLogged);
        } else {
            setUserSelect(initialUserForm);
        }
        
    },[id]);

    console.log("control de usre register page " +JSON.stringify(userSelect, null, 2));
  
    return(
        <>
            
            <div className="container-form">
                <h3>Editar Usuario</h3>

                <UserForm userSelect={userSelect}></UserForm>
            </div>
     </>
        
    )
}