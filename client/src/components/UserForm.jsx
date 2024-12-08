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
                
                <label htmlFor="username" className="form-user-label">Nombre</label>
                <input 
                    id="username"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={onInputUserChange}
                    value={name}
                />
                <label className="form-user-label-error">Por favor ingrese un nombre</label>


                <label htmlFor="userlastname" className="form-user-label">Apellido</label>
                <input 
                    id="userlastname"
                    type="text"
                    placeholder="Apellido"
                    name="lastname"
                    onChange={onInputUserChange}
                    value={lastname}
                />
                <label className="form-user-label-error">Por favor ingrese un nombre</label>

                <label htmlFor="useremail" className="form-user-label">Correo electrónico</label>
                <input 
                    id="useremail"
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    onChange={onInputUserChange}
                    value={email}
                />
                <label className="form-user-label-error">Por favor ingrese un nombre</label>

                {id > 0 
                ? '' 
                : 
                <>
                    <label htmlFor="userpassword" className="form-user-label">Contraseña</label>
                    <input 
                        id="userpassword"
                        type="text"
                        placeholder="Contraseña"
                        name="password"
                        onChange={onInputUserChange}
                        value={password}
                    />
                    <label className="form-user-label-error">Por favor ingrese un nombre</label>
                </>
                }
                
                <button
                    type="submit"
                >
                    {id > 0 ? 'Actualizar' : 'Crear'}
                    
                </button>
   
            </form>
        </div>
    )
}