import { useState } from "react"


const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',

}

export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {name, lastname, email, password} = userForm;

    const onInputUserChange = ({target}) => {
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value, 
        })
    }

    const onSubmitUserChange = (event) => {
        event.preventDefault();
        console.log("control ", userForm);
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