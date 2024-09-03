// import { useNavigate } from "react-router-dom";
import { json, NavLink } from "react-router-dom";
import { Header } from "../components/Header"
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist"
import { useEffect, useState } from "react";

export const Wishlist = () => {

    const { wishlist, handleRemoveToWishlist } = useWishlist();
    const{ handlerAddCart } = useCart();

    const onClickAddCart = (item) => {
        handlerAddCart(item);
        handleRemoveToWishlist(item.id);
    }

    console.log('cpn ' +JSON.stringify(wishlist, null, 2));
   
    return(
        <>
            <Header />
            <h2 className="wishlist-title">Favoritos</h2>

            <main className="wishlist-main">

                { wishlist && wishlist.length > 0 ? 

                    wishlist.map(item => (
                        <div key={item.id} className="wishlist-box">
                            
                            <div className="div-img">
                            <img src={`data:${item.image.mime};base64,${item.image.content}`} alt={item.image.name} />
                            
                            </div>
                    
                            <div className="div-text">
                                <h2>{item.product}</h2>
                                <p>{item.gender}</p>
                                <p>TALLA: {item.size}</p>
                                <h3>S/. {item.price}</h3>

                                <button
                                    type="submit"
                                    onClick={()=> handleRemoveToWishlist(item.id)}
                                >
                                    Eliminar
                                </button>

                                <button
                                    type="submit"
                                    onClick={() => onClickAddCart(item)}
                                    >
                                    Agregar al carrito    
                                </button>

                            </div>

                            {/* <div className="div-price">
                                <h3>S/. {item.price}</h3>
                            </div> */}
                        </div>
                    ))
                :  
                  (
                    <div>No hay productos en la lista de favoritos</div>
                  ) 
                }

            </main>

           
                <div className="wishlist-button">  
                    {wishlist.length > 0
                    ? 
                        (     
                        <NavLink to={`/uniforms/${wishlist[wishlist.length -1].school.id}` }>Continuar Comprando</NavLink>
                        ) 
                    :
                        ''
                    }
                </div> 

        </>
    )
}