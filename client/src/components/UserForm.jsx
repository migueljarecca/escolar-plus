import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../hooks/useAuth";

export const UserForm = ({ userSelect }) => {

    const { initialUserForm, handlerAddUser, handlerUpdateUser } = useUsers();
    const { handleLogin } = useAuth();

    const [userForm, setUserForm] = useState(initialUserForm);

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

    const onSubmitUserChange = async (event) => {
        event.preventDefault();
        if (userSelect.id === '') {
            //Enviamos los datos del user al Hook useUsers
            await handlerAddUser(userForm);

            handleLogin({email: userForm.email, password: userForm.password});

        } else {
            console.log('cpntrol de usr desde form ' + JSON.stringify(userForm))

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