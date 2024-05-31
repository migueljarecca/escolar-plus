import { useCart } from "../hooks/useCart"
// import { NavLink } from 'react-router-dom';
import { CartListItems } from "../components/CartListItems";

export const ShopCart = () => {

    const { cart, handleRemoveCart } = useCart();
    // console.log('Cart data: ' + JSON.stringify(cart));

    //Check if the cart is empty or not properly structured
    if (!cart || !cart.length) {
        return <div>No hay información disponible.</div>;
    }

    // const { school } = cart;
    // console.log('quantity ' +quantity);

    // if (!image) {
    //     return <div>Información de imagen no disponible.</div>;
    // }

    return(

        <section className="container-cart">
           
            <h2 className="title">CARRO DE COMPRA</h2>

            <main className="main">
               
                <article className="article">
                    {cart.map(({ id, product, price, image }) =>
                        (
                            <CartListItems 
                                key={id}
                                product={product}
                                price={price}
                                image={image}
                                handleRemoveCart={handleRemoveCart}
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