import { useCart } from "../hooks/useCart"
// import { Header } from "../components/Header";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

export const ShopCart = () => {

    const { cart, handlerRemoveCart } = useCart();
    // console.log('Cart data: ' + JSON.stringify(cart));

    //Check if the cart is empty or not properly structured
    if (!cart || !cart.length) {
        return <div>No hay información disponible.</div>;
    }

    const { id, product, price, image, quantity, school } = cart[0];
    console.log('quantity ' +quantity);

    if (!image) {
        return <div>Información de imagen no disponible.</div>;
    }

    const { productQuantity, setProductQuantity } = useState(quantity || 1);

    const handleIncreaseQuantity = () => {
        setProductQuantity(prevState => prevState + 1);
    }
    const handleDecreaseQuantity = () => {
        setProductQuantity(prevState => prevState -1);
    }


    return(

        <section className="container-cart">
            {/* <Header /> */}
            <h2 className="title">CARRO DE COMPRA</h2>

            <main className="main">
                <article className="article">
                    <div className="div-img">
                        <img src={`data:${image.mime};base64,${image.content}`} alt={"uniforme"} />
                    </div>
                    <div className="div">
                        <h3>{product}</h3>
                    </div>
                    <div className="div">
                        <h3>precio</h3>
                        <h3>S/. {price}</h3>
                    </div>
                    <div className="div">
                        <h3>cantidad</h3>
                            <button onClick={handleIncreaseQuantity}>+</button>
                            <span>{productQuantity}</span>
                            <button onClick={handleDecreaseQuantity}>-</button>

                    </div>
                    <div className="div">
                        <h3>total</h3>

                    </div>
                    <button
                        type="submit"
                        onClick={() => handlerRemoveCart(id)}
                        >
                        Eliminar   
                    </button>

                </article>
                <summary className="summary">
                    <h2>RESUMEN</h2>
                    <div className="sub-total">
                        <h3>Sub Total</h3>
                    </div>
                    <div className="total">
                        <h4>TOTAL</h4>
                    </div>
                    <div className="div">
                        <NavLink to={"/school/update/" + school.id}>Continuar Comprando</NavLink>
                        <button
                            className="button"
                            type="submit"
                            >
                            continuar
                        </button>
                    </div>
                    
                </summary>
            </main>  
        </section>
    )
}