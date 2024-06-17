import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";


export const UserForm = ({ userSelect }) => {

    const { handlerAddUser, handlerUpdateUser } = useUsers();

    const [userForm, setUserForm] = useState(userSelect);

    const {name, lastname, email, password} = userForm;

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

    const onSubmitUserChange = (event) => {
        event.preventDefault();

        if (userSelect.id === '') {
            //Enviamos los datos del user al Hook useUsers
            handlerAddUser(userForm);

        } else {
            handlerUpdateUser(userForm);
        }

        setUserForm(userSelect);
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

                <input 
                    type="text"
                    placeholder="Contraseña"
                    name="password"
                    onChange={onInputUserChange}
                    value={password}
                />

                <button
                    type="submit"
                >
                    crear
                </button>
   
            </form>
        </div>
    )
}