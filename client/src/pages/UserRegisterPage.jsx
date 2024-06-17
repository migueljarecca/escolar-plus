import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { useUsers } from "../hooks/useUsers"
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";


export const UserRegisterPage = () => {

    const { users, initialUserForm } = useUsers();
    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(()=> {
        if (id) {
            const user = users.find(item => item.id == id);
            setUserSelect(user);
        } else {
            setUserSelect(initialUserForm);
        }
    },[id]);

    return(
        <>
            <Header />
            
            <div className="container-form-user">
                <h3>{userSelect.id > 0 ? 'Editar' : 'Registrar'} Usuario</h3>

                <UserForm userSelect={userSelect}></UserForm>
            </div>
     </>
        
    )
}