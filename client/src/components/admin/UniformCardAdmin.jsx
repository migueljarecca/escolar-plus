
export const UniformCardAdmin = ({uniform, handlerSelectedUniform, handlerRemoveUniform}) => {

    const { image, product, gender, size, price, id } = uniform;

    // console.log("control de uniform " +uniform);

    const onSelectedUniform = (uniform) => {
        handlerSelectedUniform(uniform);
    }

    const onSelectedUniformById = (id) => {
        handlerRemoveUniform(id);
    }

    if (!uniform) {
        return <div>No hay información disponible.</div>;
    }

    return(
        <article className="box-uniform-admin">

            <figure className="figure-img-uniform">
                <img src={`data:${image.mime};base64,${image.content}`} alt={image.name} />  
            </figure>

            <div className="div-text-uniform">
                <h2>{product}</h2>
                <p>{gender}</p>
                <p>TALLA: {size}</p>
            </div>

            <div className="div-price-uniform">
                <h3>S/. {price}</h3>
            </div>

            <div className="content-uniform"> 

                <button 
                    type="submit"
                    onClick={() => onSelectedUniform(uniform)}    
                    >
                    Actualizar
                </button>

                <button 
                    type="submit"
                    onClick={() => onSelectedUniformById(id)}    
                    >
                    Eliminar
                </button>

            </div>
            
        </article>
    )
}