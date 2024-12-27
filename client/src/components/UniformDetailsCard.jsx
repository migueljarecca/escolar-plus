import { useCart } from "../hooks/useCart";

export const UniformDetailsCard = ({ uniformDetails }) => {

    const { handlerAddCart } = useCart();

    if (!uniformDetails) {
        return <div>No hay información disponible.</div>;
    }

    const { image, product, gender, size, price, school } = uniformDetails;
    
    if (!image) {
        return <div>Información de imagen no disponible.</div>;
    }

    const mayus = (name) => {
        return name ? name.toUpperCase() : "";
    }

    return (
        <>
            <div className="container-image-elem1">
                <figure>
                    <img src={`data:${image.mime};base64,${image.content}`} alt={"uniforme"} />
                </figure>
            </div>

            <article className="container-content-elem2">
                <div className="div-details">
                    <h2>COLEGIO { school ? mayus(school.name) : "Sin información"}</h2>
                    <h1>{product}</h1>
                    <h3>s/. {price}</h3>

                </div>

                <div className="div-talla">
                    <h2>Talla: {size}</h2>
                    <h2>{gender}</h2>

                </div>

                <div className="details-button-div">
                    <button
                        type="submit"
                        onClick={() => handlerAddCart(uniformDetails)}
                        >
                        Agregar al carrito    
                    </button>
                </div>
                    

            </article>

            
        </>
    )
}