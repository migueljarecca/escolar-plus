import { NavLink } from "react-router-dom";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../hooks/useAuth";
import { useSchool } from "../hooks/useSchool";

const transformedItem = {
    id: '',
    price: '',
    product: '',
    size: '',
    gender: '',
    userId: '', // Agrega el userId aquí
    schoolId: '',
    image: ''
  };

export const UniformFilteredCard = ( { prod, onChangeWishlist, isProductInWishlist }) => {

    const { user } = useAuth(); 
    // const { schools } = useSchool();

    const { image, product, gender, size, price, id, school } = prod;

    if (!prod) {
        return <div>No hay información disponible.</div>;
    }

    // const checkSchoolById = () => {

    // }

    const transformedItem = {
        id: id,
        price: price,
        product: product,
        size: size,
        gender: gender,
        userId: user.id, // Agrega el userId aquí
        schoolId: school.id,
        image: image
      };

    return (
        <article className="card-content">

            <NavLink to={"/uniform/details/" +id}>
                <div className="div-img">
                <img src={`data:${image.mime};base64,${image.content}`} alt={image.name} />
                
                </div>

            <div className="div-text">
                <h2>{product}</h2>
                <p>{gender}</p>
                <p>TALLA: {size}</p>
            </div>

            <div className="div-price">
                <h3>S/. {price}</h3>
            </div>
            
            </NavLink>
            
            <FontAwesomeIcon 
                onClick={() => onChangeWishlist(transformedItem)} 
                className="icon-heart"
                icon={isProductInWishlist ? fasHeart : farHeart} 
            />

            
        </article>

    )
}