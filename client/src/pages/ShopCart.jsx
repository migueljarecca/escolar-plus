import { useCart } from "../hooks/useCart"
// import { Header } from "../components/Header";
import { useState } from "react";

export const ShopCart = () => {

    const { cart, handlerRemoveCart } = useCart();
    // console.log('Cart data: ' + JSON.stringify(cart));

    //Check if the cart is empty or not properly structured
    if (!cart || !cart.length) {
        return <div>No hay información disponible.</div>;
    }

    const { id, product, price, image, quantity } = cart[0];
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

        <>
            {/* <Header /> */}
            <div>
                <h2>CARRO DE COMPRA</h2>
            </div>
            <section>
                <main>
                    <div className="container-image-elem1">
                        <img src={`data:${image.mime};base64,${image.content}`} alt={"uniforme"} />
                    </div>
                    <div>
                        <h3>{product}</h3>
                    </div>
                    <div>
                        <h2>precio</h2>
                        <h3>{price}</h3>
                    </div>
                    <div>
                        <h3>cantidad</h3>
                            <button onClick={handleIncreaseQuantity}>+</button>
                            <span>{productQuantity}</span>
                            <button onClick={handleDecreaseQuantity}>-</button>

                    </div>
                    <div>
                        <h3>total</h3>

                    </div>
                    <button
                        type="submit"
                        onClick={() => handlerRemoveCart(id)}
                        >
                        Eliminar   
                    </button>

                </main>
                <summary>

                </summary>
            </section>
            

                

                    

            
        </>
    )
}