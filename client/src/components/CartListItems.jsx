
export const CartListItems = ({ id, price, product, size, gender, schoolId, image, quantity, handleRemoveCart, 
    handleIncreaseQuantity, handleDecreaseQuantity, onClickAddWishlist, userId }) => {

    const onIncreaseQuantity = (id) => {
        handleIncreaseQuantity(id);
    }

    const onDecreaseQuantity = (id) => {
        handleDecreaseQuantity(id);
    }
    
    const onRemoveCart = (id) => {  
        handleRemoveCart(id);
    }
    // console.log('quantity ' +quantity);
    
    return (
        <div className="shop-cart-item">
            <div className="div-img">
                <img src={`data:${image.mime};base64,${image.content}`} alt={"uniforme"} />
            </div>

                    <div className="shop-details-item">
                        <h3>{product}</h3>
                    </div>
                    <div className="shop-price">
                        <h3>precio</h3>
                        <h4>S/. {price}</h4>
                    </div>
                    <div className="shop-cant">
                        <h3>cantidad</h3>
                        <div className="shop-cant-div">
                            <button onClick={() => onDecreaseQuantity (id)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => onIncreaseQuantity (id)}>+</button>
                        </div>
                         
                    </div>
                    <div className="shop-subtotal">
                        <h3>total</h3>
                        <h4>S/. {quantity * price}</h4>
                    </div>
                    <div className="button-shop-wishlist">
                        <button
                            type="submit"
                            onClick={() => onRemoveCart({id:id, userId:userId})}
                        >
                            Eliminar   
                        </button>

                        <button
                            type="submit"
                            onClick={()=> onClickAddWishlist({id, price, product, size, gender, schoolId, image})}
                        >
                        añadir a favoritos
                        </button>
                    </div>
                    
        </div>
    )
}