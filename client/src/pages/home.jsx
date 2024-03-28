import { Header } from "../components/Header"
import { SchoolList } from "../components/SchoolList"
// import insignia from '/src/images/insignia.png'

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
                <SchoolList />
            </aside>
        </>
    )
}