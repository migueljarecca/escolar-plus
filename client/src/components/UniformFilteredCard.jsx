import { NavLink } from "react-router-dom";
import { useUniform } from "../hooks/useUniform";
import { useWishlist } from "../hooks/useWishlist";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const UniformFilteredCard = ( { filter }) => {

    const { handlerRemoveUniform } = useUniform();
    const { handleAddToWishlist, handleRemoveToWishlist } = useWishlist();
    const [ iconFavorite, setIconFavorite ] = useState(false);  

    const { image, product, gender, size, price, id } = filter;

    const onSelectedUniformId = (id) => {
        handlerRemoveUniform(id);
    }

    if (!filter) {
        return <div>No hay información disponible.</div>;
    }

    const onChangeWishlist = (item) => {

        if (iconFavorite) {
            handleRemoveToWishlist(item.id)
            setIconFavorite(false);
        } else {
            handleAddToWishlist(item);
            setIconFavorite(true); 
        }
    };

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

            <div className="div-button">

                <NavLink to={"/uniform/update/" + id}> Actualizar</NavLink>
                <button
                    type='submit'
                    onClick={() => onSelectedUniformId(id)}
                    >
                    Eliminar
                </button>

            </div>
            {
                    iconFavorite ?
                    <FontAwesomeIcon 
                        onClick={()=> onChangeWishlist(filter)} 
                        className="icon-heart-solid"
                        icon={faHeart}
                    />
                :
                    <FontAwesomeIcon 
                        onClick={()=> onChangeWishlist(filter)} 
                        className="icon-heart"
                        icon={faHeart}
                    /> }
        </article>
    )
}