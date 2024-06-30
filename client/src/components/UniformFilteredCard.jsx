import { NavLink } from "react-router-dom";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UniformFilteredCard = ( { prod, onSelectedUniformId, onChangeWishlist,
    isProductInWishlist, login }) => {

    const { image, product, gender, size, price, id } = prod;

    if (!prod) {
        return <div>No hay información disponible.</div>;
    }

    return (
        <article className="card-content">

            <NavLink to={"/uniform/details/" +id}>
                <div className="div-img">
                <img src={`data:${image.mime};base64,${image.content}`} alt={image.name} />
                
                </div>
            </NavLink>

            <div className="div-text">
                <h2>{product}</h2>
                <p>{gender}</p>
                <p>TALLA: {size}</p>
            </div>

            <div className="div-price">
                <h3>S/. {price}</h3>
            </div>

            {
                login.isAdmin
                ?
                    <div className="div-button">

                        <NavLink to={"/uniform/update/" + id}> Actualizar</NavLink>
                        <button
                            type='submit'
                            onClick={() => onSelectedUniformId(id)}
                            >
                            Eliminar
                        </button>

                    </div>
                : ''    
            }
            

            <FontAwesomeIcon 
                onClick={() => onChangeWishlist(prod)} 
                className="icon-heart"
                icon={isProductInWishlist ? fasHeart : farHeart} 
            />
            
        </article>
    )
}