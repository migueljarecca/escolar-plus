import { useState } from "react";
import { Header } from "../components/Header";
import { UserForm } from "../components/UserForm";

const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
}

export const UserRegisterPage = () => {

    const [ userSelect, setUserSelect ] = useState(initialUserForm);

    return (
        <>
            <Header />
            
            <div className="container-form">
                <h3>Registrar Usuario</h3>

                <UserForm userSelect={userSelect}></UserForm>
            </div>
        </>
    )
    
}