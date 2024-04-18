import { useEffect } from "react";
import { Header } from "../components/Header"
import { SchoolList } from "../components/SchoolList"
import { useSchool } from "../hooks/useSchool";
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
                    <h1>¡Explora nuestra tienda y descubre la diferencia de
                         <span> RopaLap</span> hoy mismo!</h1>
                </div>
                <div className="div-right">

                </div>
            </div>

            <aside className="container-cole">
                <SchoolList schools={schools}/>
            </aside>

        </>
    )
}