import { useCart } from "../hooks/useCart"
import { NavLink } from 'react-router-dom';
import { CartListItems } from "../components/CartListItems";
import { useEffect } from "react";
import { useWishlist } from "../hooks/useWishlist";
import { useAuth } from "../hooks/useAuth";

export const ShopCart = () => {

    const { cart, priceTotal, handleRemoveCart, HandleCalculateTotal, 
        handleIncreaseQuantity, handleDecreaseQuantity } = useCart();

    const { user } = useAuth();    

    const { handleAddToWishlist } = useWishlist();
    
    const onClickAddWishlist = (item) => {

        const userId = user?.userLogged?.id || '';

        const favItem = {
            id: item.id,
            price: item.price,
            product: item.product,
            size: item.size,
            gender: item.gender,
            userId: userId,
            schoolId: item.schoolId,
            image: item.image
        };

        handleAddToWishlist(favItem);
        handleRemoveCart({id:item.id, userId:userId});
    }

    useEffect(() => {
        HandleCalculateTotal();
        
    },[handleIncreaseQuantity, handleDecreaseQuantity]); 

    console.log('control de cart' ,cart);
    console.log('control de cart lenght' +JSON.stringify(cart.length, null, 2));


    return(

        <section className="container-cart">
           
            <h2 className="title">CARRO DE COMPRA</h2>

            <main className="main">
               
                <article className="article">
                    {cart && cart.length > 0 ? (
                            cart.map(({ id, price, product, size, gender, schoolId, image, quantity }) =>
                                (
                                    <CartListItems 
                                        key={id}
                                        id={id}
                                        price={price}
                                        product={product}
                                        size={size}
                                        gender={gender}
                                        schoolId={schoolId}
                                        image={image}
                                        quantity={quantity}
                                        handleRemoveCart={handleRemoveCart}
                                        handleIncreaseQuantity={handleIncreaseQuantity}
                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                        onClickAddWishlist={onClickAddWishlist}
                                        userId={user?.userLogged?.id}
                                    />
                                )
                            )
                        ) : (
                            <h5 className="article-h5">El carro esta vacío</h5>
                        )
                    }

                    <div className="shop-div-a">
                        {cart.length > 0
                        ? 
                            (     
                            <NavLink to={`/uniforms/${cart[cart.length -1].schoolId}`}>Continuar Comprando</NavLink>
                            ) 
                        :
                            ''
                        }
                    </div>
                     
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
                    <div className="summary-div-a">
                     
                        <NavLink to={'/app-info'}>
                            COMPRAR
                        </NavLink>
                    </div>
                    
                </summary>
            </main>
             
        </section>
    )
}