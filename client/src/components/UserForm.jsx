import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setRegisterErrors } from "../store/slices/users/userSlice";

const initialFrontErrors = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

export const UserForm = ({ userSelect }) => {

    const { initialUserForm, errorRegisterBackend, handlerAddUser, handlerUpdateUser } = useUsers();
    const { handleLogin } = useAuth();

    const [userForm, setUserForm] = useState(initialUserForm);
    const [frontErrors, setFrontErrors] = useState(initialFrontErrors);

    const {id, name, lastname, email, password} = userForm;

    console.log('control de error backend ' +JSON.stringify(errorRegisterBackend));
    // console.log('control de user initial ' +JSON.stringify(initialUserForm, null,2));
    // console.log('control de user form 01 ' +JSON.stringify(userForm, null,2));

    const dispatch = useDispatch();

    //Utilizamos useEffect para gatillar y actualizar con el usuario seleccionado
    useEffect(() => {
        setUserForm({
            ...userSelect,
            password: '',
            id: userSelect?.id || ''
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
            [name]: ''
        });

        if (errorRegisterBackend[name]) {
            dispatch(setRegisterErrors({
                ...errorRegisterBackend,
                [name]: ''
            }))
        };
    }

    const validateCreation = () => {
        const errors = validateForm(); 

        if (!password.trim()) {
            errors.password = "Por favor ingrese una contraseña.";
        } else if (password.length < 5) {
            errors.password = "La contraseña debe tener al menos 6 caracteres.";
        }
        return errors;
    };

    const validateUpdate = () => validateForm(); // Reutilizas la validación básica.

    const validateForm = () => {
        const errors = {};
    
        if (!name.trim()) {
            errors.name = "Por favor ingrese un nombre.";
        } else if (name.length < 3) {
            errors.name = "El nombre debe tener al menos tres caracteres.";
        }
    
        if (!lastname.trim()) {
            errors.lastname = "Por favor ingrese un apellido.";
        } else if (lastname.length < 3) {
            errors.lastname = "El apellido debe tener al menos tres caracteres.";
        }
    
        if (!email.trim()) {
            errors.email = "Por favor ingrese un correo electrónico.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "El correo electrónico no es válido.";
        }
    
        return errors;
    };
    

    console.log("control de errors " +JSON.stringify(frontErrors, null,2));


    const onSubmitUserChange = async (event) => {
        event.preventDefault();

        const errors = id === '' ? validateCreation() : validateUpdate();

        if (Object.keys(errors).length > 0) {
            setFrontErrors(errors);
            return;
        }
        
        if (id === '') {
            const result = await handlerAddUser(userForm);

            if (result.success) {
                await handleLogin({email: userForm.email, password: userForm.password});
                setUserForm(initialUserForm);

            } else {
                console.log('Error al registrar usuario');
            }

        } else {
            const result = await handlerUpdateUser(userForm);

            if (result.success) {
                setUserForm(initialUserForm);

            } else {
                console.log('Error al actualizar usuario');
            }
        }  

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
                {errorRegisterBackend.email && <span>{errorRegisterBackend.email}</span>}

                {id > 0 
                ? '' 
                : 
                <>
                    <label htmlFor="userpassword" className="form-user-label">Contraseña</label>
                    <input 
                        id="userpassword"
                        type="password"
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
                    onClick={() => console.log("Botón presionado")}
                >
                    {id > 0 ? 'Actualizar' : 'Crear'}
                    
                </button>
   
            </form>
        </div>
    )
}