import { useState } from "react"

const initilSuscriptionForm = {
    email: ''
}

export const Suscription = () => {

    const [suscriptionForm, setSuscriptionForm] = useState(initilSuscriptionForm);

    const { email } = suscriptionForm;

    const onInputEmailChange = ({target}) => {
        const {name, value} = target;
        setSuscriptionForm({
            ...suscriptionForm,
            [name]: value,
        })
    }

    const onSubmitEmailChange = (event) => {
        event.preventDefault();

        console.log("control de email ", JSON.stringify(suscriptionForm, null, 2));
    }

    return (
        <section className="suscription-section">

            <div className="suscription-container">

                <h1>¡Únete a nuestra lista y descubre ofertas exclusivas!</h1>
                <p>Únete a nuestra lista y obten un 15% en tu primera compra</p>

                <form className="suscription-form" onSubmit={onSubmitEmailChange}>
                    <input 
                        type="email" 
                        placeholder="Ingresa tu correo electrónico"
                        value={email}
                        onChange={onInputEmailChange}
                        required
                    />

                    <button
                        type="submit"
                        >
                        Suscribirme    
                    </button>

                </form>
            </div>


        </section>
    )
}