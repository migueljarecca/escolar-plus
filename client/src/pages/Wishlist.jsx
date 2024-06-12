import { Header } from "../components/Header"
import { useWishlist } from "../hooks/useWishlist"

export const Wishlist = () => {

    const { wishlist } = useWishlist();
    console.log('contro ' +JSON.stringify(wishlist, null, 2))

    return(
        <>
            <Header />
            <h2 className="wishlist-title">Favoritos</h2>

            <main className="wishlist-main">

                {
                    wishlist.map(item => (
                        <div key={item.id} className="wishlist-box">
                            
                            <div className="div-img">
                            <img src={`data:${item.image.mime};base64,${item.image.content}`} alt={item.image.name} />
                            
                            </div>
                    
                            <div className="div-text">
                                <h2>{item.product}</h2>
                                <p>{item.gender}</p>
                                <p>TALLA: {item.size}</p>
                            </div>

                            <div className="div-price">
                                <h3>S/. {item.price}</h3>
                            </div>
                        </div>
                    ))
                }

            </main>
        </>
    )
}