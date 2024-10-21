import { useState } from "react"

export const UserFormAdmin = ({userSelectedAd}) => {

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

        console.log("control de user admin " + userFormAd)
        

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