import { useCart } from "../hooks/useCart"
// import { NavLink } from 'react-router-dom';
import { CartListItems } from "../components/CartListItems";
import { useEffect } from "react";

export const ShopCart = () => {

    const { cart, priceTotal, handleRemoveCart, HandleCalculateTotal, handleIncreaseQuantity, handleDecreaseQuantity } = useCart();
    // console.log('Cart data: ' + JSON.stringify(cart));

    //Check if the cart is empty or not properly structured
    if (!cart || !cart.length) {
        return <div>No hay información disponible.</div>;
    }

   useEffect(() => {
        HandleCalculateTotal();
    },[handleIncreaseQuantity, handleDecreaseQuantity]); 

    // const { school } = cart;

    // if (!image) {
    //     return <div>Información de imagen no disponible.</div>;
    // }

    return(

        <section className="container-cart">
           
            <h2 className="title">CARRO DE COMPRA</h2>

            <main className="main">
               
                <article className="article">
                    {cart.map(({ id, product, price, image, quantity }) =>
                        (
                            <CartListItems 
                                key={id}
                                id={id}
                                product={product}
                                price={price}
                                image={image}
                                quantity={quantity}
                                handleRemoveCart={handleRemoveCart}
                                handleIncreaseQuantity={handleIncreaseQuantity}
                                handleDecreaseQuantity={handleDecreaseQuantity}

                            />
                        )
                    )}
                </article>
            
                <summary className="summary">
                    <h2>RESUMEN</h2>
                    <div className="sub-total">
                        <h3>Sub Total</h3>
                    </div>
                    <div className="total">
                        <h4>TOTAL</h4>
                        <h3>S/. {priceTotal}</h3>
                    </div>
                    <div className="div">
                        {/* <NavLink to={"/school/update/" + school.id}>Continuar Comprando</NavLink> */}
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