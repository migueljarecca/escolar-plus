import { useState } from "react"
import { useUsers } from "../../hooks/useUsers";

export const UserFormAdmin = ({userSelectedAd}) => {

    const { handlerAddUser, handlerUpdateUser, initialUserForm } = useUsers();

    const [userFormAd, setUserFormAd] = useState(userSelectedAd);

    const {id, name, lastname, email, password} = userFormAd; 

    const onInputUserAd = ({target}) => {
        const {name, value} = target;
        setUserFormAd({
            ...userFormAd,
            [name]: value,
        })
    }

    const onSubmitUserAd = (event) => {

        event.preventDefault();

        if (id === 0) {
            handlerAddUser(userFormAd);

        } else {
            handlerUpdateUser(userFormAd);
        }

        console.log("control de user admin " + JSON.stringify(userFormAd, null, 2));

        setUserFormAd(initialUserForm);
        

    }

    return(
        <>
            <form onSubmit={onSubmitUserAd}>

                <input 
                    type="text" 
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={onInputUserAd}
                />

                <input 
                    type="text" 
                    placeholder="Apellido"
                    name="lastname"
                    value={lastname}
                    onChange={onInputUserAd}
                />

                <input 
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={email}
                    onChange={onInputUserAd}
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputUserAd}
                />

                <button
                    type="submit"

                >
                    Crear usuario
                </button>

            </form>
        </>
    )
}