import { Header } from "../components/Header"
import insignia from '/src/images/insignia.png'

export const Home = () => {

    return (
        <>
            <Header />
            <div className="container-home">
                <div className="div-left">

                </div>
                <div className="div-right">

                </div>
            </div>

            <aside className="container-cole">
                <div className="box-cole">
                    <div className="div-content">
                        <h3>Colegio</h3>
                        <h2>Jorge Chavez</h2>
                        <p>Ver Catálogo</p>
                    </div>
                    <div className="div-img">
                        <img src={insignia} alt="#" />
                    </div>
                </div>
            </aside>
        </>
    )
}