import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../hooks/useAuth";

export const UserForm = ({ userSelect }) => {

    const { initialUserForm, handlerAddUser, handlerUpdateUser } = useUsers();
    const { handleLogin } = useAuth();

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id, name, lastname, email, password} = userForm;

    //Utilizamos useEffect para gatillar y actualizar con el usuario seleccionado
    useEffect(() => {
        setUserForm({
            ...userSelect,
            password: '',
        })
    },[userSelect]);

    const onInputUserChange = ({target}) => {
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value, 
        })
    }

    const onSubmitUserChange = async (event) => {
        event.preventDefault();
        if (id === '') {
            //Enviamos los datos del user al Hook useUsers
            await handlerAddUser(userForm);

            handleLogin({email: userForm.email, password: userForm.password});

        } else {
            console.log('cpntrol de usr desde form ' + JSON.stringify(userForm))

            await handlerUpdateUser(userForm);

        }

        setUserForm(initialUserForm);
    }

    return (
        <div className="container-form-user">
            <form  className="form-user" onSubmit={onSubmitUserChange}>
                
                <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={onInputUserChange}
                    value={name}
                />

                <input 
                    type="text"
                    placeholder="Apellido"
                    name="lastname"
                    onChange={onInputUserChange}
                    value={lastname}
                />

                <input 
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    onChange={onInputUserChange}
                    value={email}
                />

                {id > 0 
                ? '' 
                : 
                <input 
                    type="text"
                    placeholder="Contraseña"
                    name="password"
                    onChange={onInputUserChange}
                    value={password}
                />}
                
                <button
                    type="submit"
                >
                    {id > 0 ? 'Actualizar' : 'Crear'}
                    
                </button>
   
            </form>
        </div>
    )
}