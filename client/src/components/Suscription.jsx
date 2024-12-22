import { useState } from "react"

const initilSuscriptionForm = {
    email: ''
}

export const Suscription = () => {

    const [suscriptionForm, setSuscriptionForm] = useState(initilSuscriptionForm);

    const { email } = suscriptionForm;

    const onInputEmailChange = (event) => {
        const {name, value} = event.target;
        
        setSuscriptionForm({
            ...suscriptionForm, // ayuda a preservar los estados
            [name]: value,
        })
    }

    const onSubmitEmailChange = (event) => {
        event.preventDefault(); //evita que se recargue la página

        console.log("control de email ", JSON.stringify(suscriptionForm, null, 2));

        setSuscriptionForm(initilSuscriptionForm);
    }

    return (
        <section className="suscription-section">

            <div className="suscription-container">

                <h1>¡Únete a nuestra lista y descubre ofertas exclusivas!</h1>
                <p>Únete a nuestra lista y obten un 15% en tu primera compra</p>

                <form className="suscription-form" onSubmit={onSubmitEmailChange}>
                    <input 
                        type="email" 
                        name="email"
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