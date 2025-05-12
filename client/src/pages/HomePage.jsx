import { useEffect } from "react";
import { Header } from "../components/Header"
import { SchoolList } from "../components/SchoolList"
import { useSchool } from "../hooks/useSchool";
import { Footer } from "../components/Footer";

import shop from '/src/images/shop.jpg'
import shop_2 from '/src/images/shop-2.png'
import dos from '/src/images/dos.png'

import { Suscription } from "../components/Suscription";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
// import insignia from '/src/images/insignia.png'


export const HomePage = () => {

    const { getSchools, schools } = useSchool();
    const { getFavorites } = useWishlist();
    const { getCartItems } = useCart();
    const { user } = useAuth();

    useEffect(() => {
        getSchools();
        // console.log('control de home id ' +user.userLogged.id)
    },[]);

    let hasFetchedFavorites = false;

    useEffect(() => {
        if (user?.userLogged?.id && !hasFetchedFavorites) {
            getFavorites(user.userLogged.id); 
            hasFetchedFavorites = true;
        }
    },[]);

    let hasFetchedCart = false;

    useEffect(() => {
        if (user?.userLogged?.id && !hasFetchedCart) {
            getCartItems(user.userLogged.id); 
            hasFetchedCart = true;
        }
    },[]);

    // console.log('control desde home user ' +JSON.stringify(user, null, 2))

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
                    <img src={dos} alt="Shop" />
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