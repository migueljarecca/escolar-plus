import { NavLink } from "react-router-dom";
import { useUniform } from "../hooks/useUniform";

export const UniformFilteredCard = ( { filter }) => {

    const { handlerRemoveUniform } = useUniform();

    const { image, product, gender, size, price, id } = filter;

    const onSelectedUniformId = (id) => {
        handlerRemoveUniform(id);
    }

    if (!filter) {
        return <div>No hay información disponible.</div>;
    }




    return (
        <article className="card-content">
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
            <div className="div-button">

                <NavLink to={"/uniform/update/" + id}> Actualizar</NavLink>
                <button
                    type='submit'
                    onClick={() => onSelectedUniformId(id)}
                    >
                    Eliminar
                </button>

            </div>
        </article>
    )
}