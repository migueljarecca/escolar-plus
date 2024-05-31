import { useState } from "react";

export const CartListItems = ({ image, product, price, quatity, handleRemoveCart }) => {

    const { productQuantity, setProductQuantity } = useState(quatity || 1);

    const handleIncreaseQuantity = () => {
        setProductQuantity(prevState => prevState + 1);
    }
    const handleDecreaseQuantity = () => {
        setProductQuantity(prevState => prevState -1);
    }
    
    const onRemoveCart = (id) => {
        handleRemoveCart(id);
    }
    
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
                            <button onClick={handleIncreaseQuantity}>+</button>
                            <span>{productQuantity}</span>
                            <button onClick={handleDecreaseQuantity}>-</button>

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