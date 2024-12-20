import { useEffect } from "react";
import { Header } from "../components/Header"
import { SchoolList } from "../components/SchoolList"
import { useSchool } from "../hooks/useSchool";
import { Footer } from "../components/Footer";

import shop from '/src/images/shop.jpg'
import { Suscription } from "../components/Suscription";
// import insignia from '/src/images/insignia.png'


export const HomePage = () => {

    const { getSchools, schools } = useSchool();

    useEffect(() => {
        getSchools();
    },[]);

    return (
        <>
            <Header />
            
            <div className="container-home">
                <div className="div-left">
                    <h1>Uniformes escolares</h1>
                    <span></span>
                    <p>Nos enorgullece ofrecer una amplia gama de uniformes cuidadosamente
                        diseñados que combinan comodidad, durabilidad y un diseño 
                        contemporáneo.</p>
                </div>
                <div className="div-right">
                    <img src={shop} alt="Shop" />
                </div>
            </div>
            
            <div className="section-select-cole">
                <h3 className="subtitle-h3">Elige tu colegio</h3>

                <aside className="container-cole">
                    <SchoolList schools={schools}/>
                </aside>
            </div>

            <Suscription />
            

            <Footer />

        </>
    )
}