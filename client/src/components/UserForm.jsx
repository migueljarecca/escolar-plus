import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../hooks/useAuth";

const initialFrontErrors = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

export const UserForm = ({ userSelect }) => {

    const { initialUserForm, handlerAddUser, handlerUpdateUser } = useUsers();
    const { handleLogin } = useAuth();

    const [userForm, setUserForm] = useState(initialUserForm);
    const [frontErrors, setFrontErrors] = useState(initialFrontErrors);

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
        });

        setFrontErrors({
            ...initialFrontErrors,
            [name]: value
        });
    }

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Por favor ingrese un nombre."
        } else if (name.length < 3) {
            errors.name = "El nombre debe tener almenos tres caracteres."
        }

        if (!lastname.trim()) {
            errors.lastname = "Por favor ingrese un apellido."
        } else if (name.length < 3) {
            errors.lastname = "El apellido debe tener almenos tres caracteres."
        }

        if (!email.trim()) {
            errors.email = "Por favor ingrese una correo electrónico.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "El correo electrónico no es válido.";
        }

        if (!password.trim()) {
            errors.password = "Por favor ingrese una contraseña.";
        } else if (password.length < 5) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }
        return errors;
    };

    const onSubmitUserChange = async (event) => {
        event.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFrontErrors(errors);
            return;
        }
        
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
                {frontErrors.name && <span>{frontErrors.name}</span>}

                <label htmlFor="userlastname" className="form-user-label">Apellido</label>
                <input 
                    id="userlastname"
                    type="text"
                    placeholder="Apellido"
                    name="lastname"
                    onChange={onInputUserChange}
                    value={lastname}
                />
                {frontErrors.lastname && <span>{frontErrors.lastname}</span>}

                <label htmlFor="useremail" className="form-user-label">Correo electrónico</label>
                <input 
                    id="useremail"
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    onChange={onInputUserChange}
                    value={email}
                />
                {frontErrors.email && <span>{frontErrors.email}</span>}

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
                {frontErrors.password && <span>{frontErrors.password}</span>}
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