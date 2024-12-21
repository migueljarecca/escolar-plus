import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const AppInfo = () => {

    return(
        <>
            <Header />

            <div className="content-info">

                <h1>Aviso Importante</h1>
                <p>
                    Este e-commerce fue desarrollado únicamente como un proyecto 
                    demostrativo para mostrar mis habilidades en programación utilizando 
                    tecnologías como <span>React</span> para el frontend y <span>Java</span> 
                    para el backend.
                </p>

                <p>
                    <span>No es un sitio web funcional para realizar compras.</span> 
                    Ninguno de los productos aquí mostrados está a la venta, y las 
                    imágenes utilizadas son solo ilustrativas, ya 
                    que <span>no poseo los derechos de autor sobre las fotografías 
                    de los uniformes.</span>
                </p>

                <p>
                    Agradezco tu visita y tu interés en este proyecto, cuyo único 
                    objetivo es exhibir mis capacidades en el desarrollo de 
                    aplicaciones web modernas.
                </p>

                <p>
                    Si deseas más información sobre mi trabajo o estás interesado 
                    en colaborar conmigo, no dudes en contactarme.
                </p>

            </div>

            <Footer />
        </>
    )
}