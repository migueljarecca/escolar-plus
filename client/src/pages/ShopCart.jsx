import { useCart } from "../hooks/useCart"
import { NavLink } from 'react-router-dom';
import { CartListItems } from "../components/CartListItems";
import { useEffect, useState } from "react";
import { useWishlist } from "../hooks/useWishlist";

export const ShopCart = () => {

    const { cart, priceTotal, handleRemoveCart, HandleCalculateTotal, 
        handleIncreaseQuantity, handleDecreaseQuantity } = useCart();

    const { handleAddToWishlist } = useWishlist();

    const [schoolId, setSchoolId] = useState('null');

    useEffect(() => {
        if (cart.length > 0) {
            const schoolId = cart[cart.length -1].school.id;
            setSchoolId(schoolId);
            sessionStorage.setItem('schoolId', schoolId);
        } else {
            const savedSchoolId = sessionStorage.getItem('schoolIdOfCart');
            if (savedSchoolId) {
                setSchoolId(savedSchoolId);
            }
        }
    },[cart]);
    
    const onClickAddWishlist = (item) => {
        handleAddToWishlist(item);//falta colegio
        handleRemoveCart(item.id);
    }
   useEffect(() => {
        HandleCalculateTotal();
    },[handleIncreaseQuantity, handleDecreaseQuantity]); 

    console.log('control de cart' +JSON.stringify(cart, null, 2));
    return(

        <section className="container-cart">
           
            <h2 className="title">CARRO DE COMPRA</h2>

            <main className="main">
               
                <article className="article">
                    {cart && cart.length > 0 ? (
                            cart.map(({ id, product, price, image, quantity, school }) =>
                                (
                                    <CartListItems 
                                        key={id}
                                        id={id}
                                        product={product}
                                        price={price}
                                        image={image}
                                        school={school}
                                        quantity={quantity}
                                        handleRemoveCart={handleRemoveCart}
                                        handleIncreaseQuantity={handleIncreaseQuantity}
                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                        onClickAddWishlist={onClickAddWishlist}
                                    />
                                )
                            )
                        ) : (
                            <div>El carro esta vacío</div>
                        )
                    }
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
                        {schoolId > 0
                        ? 
                            (     
                            <NavLink to={"/uniforms/" + schoolId}>Continuar Comprando</NavLink>
                            ) 
                        :
                            ''
                        }
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