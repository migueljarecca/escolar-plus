// import { useState } from "react";
import { useCart } from "../hooks/useCart";

export const CartListItems = ({ id, image, product, price, quantity, handleRemoveCart, handleIncreaseQuantity, handleDecreaseQuantity }) => {

    // const { handleIncreaseQuantity, handleDecreaseQuantity } = useCart();

    // const [ productQuantity, setProductQuantity ] = useState(quantity);

    const onIncreaseQuantity = (id) => {
        handleIncreaseQuantity(id);
    }

    const onDecreaseQuantity = (id) => {
        handleDecreaseQuantity(id);
    }
    
    const onRemoveCart = (id) => {  
        handleRemoveCart(id);
    }
    console.log('quantity ' +quantity);
    
    return (
        <div className="cart-item">
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
                            <button onClick={() => onIncreaseQuantity (id)}>+</button>
                            <span>{quantity}</span>
                            <button onClick={() => onDecreaseQuantity (id)}>-</button>

                    </div>
                    <div className="div">
                        <h3>total</h3>

                    </div>
                    <button
                        type="submit"
                        onClick={() => onRemoveCart(id)}
                        >
                        Eliminar   
                    </button>
        </div>
    )
}